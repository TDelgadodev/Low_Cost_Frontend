import { Alert, Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
/* import { useNavigate } from "react-router-dom"; */



export const Login = () => {
  const { login, alert } = useAuth();
  /* const navigate = useNavigate(); */

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
            <div className="pb-3">
              <h2>Hola, Bienvenido!</h2>
            </div>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Field
                id="email"
                type="text"
                placeholder="Ingresa tu email"
                name="email"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("email", "")}
              ></Field>
              <ErrorMessage
                name="email"
                component={Form.Text}
                className="text-danger"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className={`mb-2 form-box ${styles.forxTablet}`}>
              <Form.Label htmlFor="password">Contraseña</Form.Label>
              <Field
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa su contraseña"
                name="password"
                as={Form.Control}
                className="shadow border-secondary"
              ></Field>
              <ErrorMessage
                name="email"
                component={Form.Text}
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
            {["checkbox"].map((type) => (
              <div
                key={`default-${type}`}
                className={`d-flex w-100 gap-2 ${styles.formBoxLInksTablet}`}
              >
                <Form.Check
                  type={type}
                  className="m-0 "
                  id={`default-${type}`}
                  label={"Recuerdame"}
                />
                <Link
                  className="text-danger text-decoration-none white-space-nowrap"
                  to={"/get-code"}
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
            ))}
            <div className="mt-3">
              <div className={`d-grid gap-2`}>
                <Button
                  variant="primary"
                  className="p-2"
                  type="submit"
                  size="md"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </div>
            <div className={`d-flex gap-2 mt-3 ${styles.formBoxLinks}`}>
              <p className={styles.title}>¿No tenés una cuenta?</p>
              <Link className="text-decoration-none" to={"/register"}>
                Registrate
              </Link>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
