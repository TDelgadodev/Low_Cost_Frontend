import { Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Debe ingresar un email"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Col xs={10} sm={6} md={6} lg={4} xl={4} className={`${styles.loginForm} mb-5`}>
            <div>
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
              ></Field>
              <ErrorMessage
                name='email'
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2 form-box">
              <Form.Label htmlFor="password">Contraseña</Form.Label>
              <Field
                id="password"
                type="password"
                placeholder="Ingresa su contraseña"
                name="password"
                as={Form.Control}
                className="shadow border-secondary"
              ></Field>
              <ErrorMessage
                name="password"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
              <button className={styles.formBox}>
                <i className="fa-solid fa-eye"></i>
              </button>
            </Form.Group>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className=" d-flex w-100 gap-2">
                <Form.Check
                  type={type}
                  className="m-0 "
                  id={`default-${type}`}
                  label={"Recuerdame"}
                />
                <Link className="text-danger text-decoration-none" to={'/resetPassword'}>¿Olvidó su contraseña?</Link>
              </div>
            ))}
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
              <p className={styles.title}>¿No tienes una cuenta?</p>
              <Link className="text-decoration-none " to={"/register"}>
                Registrate
              </Link>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
