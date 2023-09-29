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
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Debe ingresar tu nombre"),
    surname: Yup.string().required("Debe ingresar tu apellido"),
    email: Yup.string().required("Debe ingresar un email válido").email(),
    phone: Yup.number()
      .required("Debe ingresar su número telefónico")
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
            <div className="pb-4">
              <h3 className={`${styles.title}`}>¡Completa tus datos!</h3>
            </div>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Nombre</Form.Label>
              <Field
                id="name"
                type="text"
                placeholder="Ingresá tu nombre"
                name="name"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                onFocus={() => formik.setFieldError("name", "")}
              ></Field>
              <ErrorMessage
                name="name"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Apellido</Form.Label>
              <Field
                id="surname"
                type="text"
                placeholder="Ingresá tu apellido"
                name="surname"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                onFocus={() => formik.setFieldError("surname", "")}
              ></Field>
              <ErrorMessage
                name="surname"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Número</Form.Label>
              <Field
                id="phone"
                type="number"
                placeholder="Ingresá tu número"
                name="phone"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                onFocus={() => formik.setFieldError("phone", "")}
              ></Field>
              <ErrorMessage
                name="phone"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Email</Form.Label>
              <Field
                id="email"
                type="email"
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
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email" style={{ fontFamily: 'Poppins' }}>Contraseña</Form.Label>
              <Field
                id="password"
                type="password"
                placeholder="Ingresá tu contraseña"
                name="password"
                as={Form.Control}
                style={{ borderColor: 'rgba(206, 206, 206, 0.795)', fontFamily: 'Poppins' }}
                onFocus={() => formik.setFieldError("password", "")}
              ></Field>
              <ErrorMessage
                name="password"
                component={Form.Text}
                style={{ fontFamily: 'Poppins' }}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <div className="mt-5">
              <div className={`d-grid gap-2`}>
                <Button
                  variant="primary"
                  className="p-2"
                  style={{ fontFamily: 'Poppins' }}
                  type="submit"
                  size="md"
                >
                  Regístrate
                </Button>
              </div>
            </div>
            <div className={`d-flex gap-2 mt-4 ${styles.linksRegister}`}>
              <p className={styles.title}>¿Ya tenés una cuenta?</p>
              <Link className="text-decoration-none" style={{ fontFamily: 'Poppins' }} to={"/login"}>
                Ingresá
              </Link>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
