import { Alert, Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";



export const Login = () => {
  const { login, alert } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Debe ingresar un email"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);

    } catch (error) {
      throw new Error(error.response.data.error.message)
    } finally {
      setSubmitting(false);
    }
  };


  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="py-5">
          <Col
            xs={10}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className={`${styles.loginForm} mb-5`}
          >
            {alert && <Alert variant="danger">{alert}</Alert>}
            <div className="pb-4">
              <h3 className={`${styles.title}`}>¡Hola, bienvenido!</h3>
            </div>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Email</Form.Label>
              <Field
                id="email"
                type="text"
                placeholder="Ingresá tu email"
                name="email"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                onFocus={() => formik.setFieldError("email", "")}
              ></Field>
              <ErrorMessage
                name="email"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className={`mb-3 form-box ${styles.forxTablet}`}>
              <Form.Label htmlFor="password" style={{ fontFamily: 'Poppins' }}>Contraseña</Form.Label>
              <Field
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresá tu contraseña"
                name="password"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
              ></Field>
              <ErrorMessage
                name="email"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger"
              ></ErrorMessage>
              <button
                type="button"
                className={styles.formBox}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <i
                  className={`fa-solid fa-eye${showPassword ? "-slash" : ""}`}
                ></i>
              </button>
            </Form.Group>
            <Link
              className={`${styles.cuestion} "text-danger text-decoration-none white-space-nowrap"`}
              to={"/get-code"}
            >
              ¿Olvidó su contraseña?
            </Link>
            <div className="mt-3">
              <div className={`d-grid gap-2 mt-4`}>
                <Button
                  variant="primary"
                  className="p-2"
                  style={{ fontFamily: 'Poppins' }}
                  type="submit"
                  size="md"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </div>
            <div className={`d-flex gap-2 mt-4 ${styles.formBoxLinks}`}>
              <p className={styles.title}>¿No tenés una cuenta?</p>
              <Link className={`${styles.register} text-decoration-none`} to={"/register"}>
                Regístrate
              </Link>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
