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

export const Profile = () => {
  const { getProfile, userProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const initialValues = {
    name: userProfile?.user?.name || "",
    surname: userProfile?.user?.surname || "",
    email: userProfile?.user?.email || "",
    phone: userProfile?.user?.phone.toString() || "",
    dni: userProfile?.user?.dni || "",
    address: userProfile?.user?.address?.street || "",
    location: userProfile?.user?.address?.location || "",
    zone: userProfile?.user?.address?.province || "",
    postCode: userProfile?.user?.address?.postalCode || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Debe ingresar su nombre"),
    surname: Yup.string().required("Debe ingresar su apellido"),
    email: Yup.string().required("Debe ingresar un email válido").email(),
    phone: Yup.string()
      .required("Debe ingresar su número telefónico")
      .matches(/^\d+$/, "El teléfono debe ser numérico"),
    dni: Yup.number().integer(),
    postCode: Yup.number().integer(),
    address: Yup.string(),
    location: Yup.string(),
    zone: Yup.string(),
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
        sessionStorage.getItem("LowCostToken")
      );
      await getProfile();

      setIsLoading(false);
      toast.success("¡Información actualizada con éxito!");
    } catch (error) {
      console.error("Error updating user:", error);
      setIsLoading(false);
      toast.error("Ocurrió un error al actualizar la información.");
    }
  };

  useEffect(() => {
    if (!userProfile) {
      setIsLoading(true);
      getProfile();
    }
  }, [getProfile, userProfile]);

  useEffect(() => {
    if (userProfile) {
      setIsLoading(false);
    }
  }, [userProfile]);

  console.log("userProfile:", userProfile);

  return (
    <div>
      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      <Formik
        initialValues={initialValues}
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
                      placeholder="Ingrese su DNI"
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
                      id="address"
                      type="text"
                      placeholder="Direccion"
                      name="address"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="address"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="location"
                      type="text"
                      placeholder="Localidad"
                      name="location"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="location"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>

                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="zone"
                      type="text"
                      placeholder="Zona"
                      name="zone"
                      as={Form.Control}
                      style={{
                        borderColor: "rgba(206, 206, 206, 0.795)",
                        fontFamily: "Poppins",
                      }}
                    ></Field>
                    <ErrorMessage
                      name="zone"
                      component={Form.Text}
                      style={{ fontFamily: "Poppins" }}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                  <Form.Group className="mb-2 mt-3">
                    <Field
                      id="postCode"
                      type="number"
                      placeholder="Codigo Postal"
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
                        disabled={isLoading} // Deshabilitar el botón cuando isLoading es true
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
};
