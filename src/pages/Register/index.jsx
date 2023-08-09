import { Button, Col, Form } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import useAuth from "../../hooks/useAuth"; 
import { useState } from "react";


export const Register = () => {
  const { register } = useAuth(); 
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate(); // Agrega esto

  const initialValues = {
    nameSurname: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Debes ingresar tu nombre"),
    surname: Yup.string().required("Debes ingresar tu apellido"),
    email: Yup.string().required("Debe ingresar un email").email(),
    phone: Yup.number()
      .required("Debe ingresar su numero de telefono")
      .positive()
      .integer(),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values) => {
    try {
      await register(values);
      toast.success("Registro exitoso");
      setRegistrationSuccess(true);
      navigate("/login"); 
    } catch (error) {
      throw new Error(error.response.data.error.message)
    }
  };


  if (registrationSuccess) {
    return null; 
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className={`m-3 ${styles.formRegister}`}
        >
          <Col xs={10} sm={6} md={6} lg={4} xl={4}>
            <div>
              <h2>Hola, Bienvenido!</h2>
            </div>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Nombre</Form.Label>
              <Field
                id="name"
                type="text"
                placeholder="Ingresa su nombre"
                name="name"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("name", "")}
              ></Field>
              <ErrorMessage
                name="name"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Apellido</Form.Label>
              <Field
                id="surname"
                type="text"
                placeholder="Ingresa su apellido"
                name="surname"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("surname", "")}
              ></Field>
              <ErrorMessage
                name="surname"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Field
                id="email"
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("email", "")}
              ></Field>
              <ErrorMessage
                name="email"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Numero</Form.Label>
              <Field
                id="phone"
                type="number"
                placeholder="Ingrese su numero"
                name="phone"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("phone", "")}
              ></Field>
              <ErrorMessage
                name="phone"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Contraseña</Form.Label>
              <Field
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("password", "")}
              ></Field>
              <ErrorMessage
                name="password"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <div className="mt-3">
              <div className={`d-grid gap-2`}>
                <Button
                  variant="primary"
                  className="p-2"
                  type="submit"
                  size="md"
                >
                  Registrarse
                </Button>
              </div>
            </div>
            <div className={`d-flex gap-2 mt-3 ${styles.linksRegister}`}>
              <p className={styles.title}>¿Ya tienes una cuenta?</p>
              <Link className="text-decoration-none " to={"/login"}>
                Ingresar
              </Link>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
