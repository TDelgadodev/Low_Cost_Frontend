import { ErrorMessage, Field, Formik } from "formik";
import { Image, Form, Button, Col, Container } from "react-bootstrap";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { updateProfileService } from "../../services/auth.service";
import { toast } from "react-toastify";
import WhatsApp from "../../components/WhatsApp";
import ShoppingCart from "../../components/CartModal";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const { getProfile, userProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userProfile) {
      // Si userProfile aún no se ha cargado, obtenerlo
      getProfile();
    } else {
      // userProfile ya se ha cargado, establecer isLoading en false
      setIsLoading(false);
    }
  }, [getProfile, userProfile]);

  console.log('perfil de usuario:', userProfile)
  console.log(userProfile?.user?.name)

  const initialValues = {
    name: userProfile?.user?.name || "",
    surname: userProfile?.user?.surname || "",
    email: userProfile?.user?.email || "",
    phone: userProfile?.user?.phone.toString() || "",
    dni: userProfile?.user?.dni || "",
    street: userProfile?.user?.address?.street || "",
    numberAddress: userProfile?.user?.address?.numberAddress || "",
    postCode: userProfile?.user?.address?.postCode || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Debe ingresar su nombre"),
    surname: Yup.string().required("Debe ingresar su apellido"),
    email: Yup.string().required("Debe ingresar un email válido").email(),
    phone: Yup.string()
      .required("Debe ingresar su número telefónico")
      .matches(/^\d+$/, "El teléfono debe ser numérico"),
    dni: Yup.number().integer(),
    street: Yup.string(),
    numberAddress: Yup.number().integer(),
    postCode: Yup.number().integer(),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formattedValues = {
        id: userProfile.user.id,
        ...values,
        phone: parseInt(values.phone),
      };
      console.log(formattedValues);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleUpdateProfile = async (values) => {
    try {
      setIsLoading(true);

      const formattedValues = {
        ...values,
        phone: parseInt(values.phone),
        id: userProfile.user.id,
      };

      await updateProfileService(
        formattedValues,
        localStorage.getItem("LowCostToken")
      );
      await getProfile();

      setIsLoading(false);
      navigate("/");
      toast.success("¡Información actualizada con éxito!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating user:", error);
      setIsLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error.message);
      } else {
        toast.error("Ocurrió un error al actualizar la información.");
      }
    }
  };

  return (
    <div>
      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className="py-3">
            <Container className="d-flex justify-content-center">
              <Col xs={10} sm={6} md={6} lg={4} xl={4} className="center">
                <Image
                  className={`${styles.profile}`}
                  src="/default-img-user.png"
                />
                <div className="text-center">
                  {userProfile && (
                    <div>
                      <h3 className={`${styles.title} pt-5`}>
                        {" "}
                        Bienvenido {userProfile.user.name}
                      </h3>
                    </div>
                  )}
                </div>
                <div className="p-2 m-2 mb-5">
                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="name"
                      type="text"
                      placeholder="Nombre"
                      name="name"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="surname"
                      type="text"
                      placeholder="Apellido"
                      name="surname"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="surname"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="email"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="phone"
                      type="number"
                      placeholder="Teléfono con cód. de área"
                      name="phone"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="phone"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="dni"
                      type="number"
                      placeholder="Ingresá tu DNI"
                      name="dni"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="dni"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="street"
                      type="text"
                      placeholder="Ingresá tu calle"
                      name="street"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="street"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="numberAddress"
                      type="number"
                      placeholder="Nº de calle"
                      name="numberAddress"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="numberAddress"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="postCode"
                      type="number"
                      placeholder="Código Postal"
                      name="postCode"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="postCode"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <div className="mt-3">
                    <div className={`d-grid gap-2 mt-4`}>
                      <Button
                        variant="primary"
                        style={{ fontFamily: "Poppins" }}
                        className="w-80 p-2"
                        size="lg"
                        type="submit"
                        disabled={isLoading}
                        onClick={() => handleUpdateProfile(formik.values)}
                      >
                        {isLoading ? "Guardando..." : "Guardar"}{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <WhatsApp></WhatsApp>
              <ShoppingCart></ShoppingCart>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
}