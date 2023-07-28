import { ErrorMessage, Field, Formik } from "formik";
import { Button, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import styles from "./index.module.css";

export const ResetPassword = () => {
  const initialValues = {
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Debes ingresar una contraseña"),
    repeatPassword: Yup.string().required("Debes confirmar tu contraseña"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="m-3 p-3">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={`m-3 ${styles.formResetPass}`}>
            <Col xs={10} sm={6} md={6} lg={4} xl={4}>
            <h2>Nueva Contraseña</h2>
            <Form.Group className="mb-2">
            <Field
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            as={Form.Control}
            className="shadow border-secondary mt-3 mb-2"
            ></Field>
              <ErrorMessage
                name="password"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2 form-box">
            <Field
            id="repeatPassword"
            type="password"
            placeholder="Ingrese su contraseña"
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
              <Button
                variant="primary"
                className="w-80 p-2"
                size="lg"
                type="submit"
              >
                Ingresar
              </Button>
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <p className="font-weight-bold">¿Ya tienes una cuenta?</p>
            <Link to={'/login'} className="text-decoration-none">Ingresar</Link>
          </div>
          </Col>
          </Form>
        )}
      </Formik>
    </div>
  );
};
