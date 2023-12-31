import { Field, Formik } from "formik";
import { Button, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import * as Yup from "yup";

const GetCodeStep = ({ onSubmit }) => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Debes ingresar un email"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
          <Col xs={10} sm={6} md={6} lg={4} xl={4}>
            <h4>Obtener código para una nueva contraseña</h4>
            <Form.Group className="mb-2">
              <Field
                id="email"
                type="email"
                placeholder="Ingrese su email"
                name="email"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                className={`mt-3 mb-2 ${formik.touched.email && formik.errors.email
                  ? "border-danger"
                  : ""
                  }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger ms-2">{formik.errors.email}</div>
              )}
            </Form.Group>
            <div className="mt-5">
              <div className={`d-grid gap-2`}>
                <Button variant="primary" type="submit">
                  Obtener Código
                </Button>
              </div>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};


GetCodeStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default GetCodeStep;
