import { ErrorMessage, Field, Formik } from "formik";
import { Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const ResetPasswordStep = ({ onSubmit }) => {
  const initialValues = {
    codeReset: "",
    newPassword: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object({
    codeReset: Yup.string().required("Debes ingresar un código"),
    newPassword: Yup.string().required("Debes ingresar una nueva contraseña"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Las contraseñas deben coincidir")
      .required("Debes confirmar tu contraseña"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className={`m-3 ${styles.formResetPass}`}
        >
          <Col xs={10} sm={6} md={6} lg={4} xl={4}>
            <h2>Restablecer Contraseña</h2>
            <Form.Group className="mb-2">
              <Field
                id="codeReset"
                type="text"
                placeholder="Ingrese el código de verificación"
                name="codeReset"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Field
                id="newPassword"
                type="password"
                placeholder="Ingrese su nueva contraseña"
                name="newPassword"
                as={Form.Control}
                className="shadow border-secondary mt-3 mb-2"
              ></Field>
              <ErrorMessage
                name="newPassword"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2 form-box">
              <Field
                id="repeatPassword"
                type="password"
                placeholder="Confirme su nueva contraseña"
                name="repeatPassword"
                as={Form.Control}
                className="shadow border-secondary mt-1 mb-1"
              ></Field>
              <ErrorMessage
                name="repeatPassword"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <div className="mt-3">
              <div className={`d-grid gap-2`}>
                <Button variant="primary" type="submit">
                  Restablecer Contraseña
                </Button>
              </div>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};

ResetPasswordStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ResetPasswordStep;
