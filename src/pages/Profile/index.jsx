import { ErrorMessage, Field, Formik } from "formik";
import { Image, Form, Button, Col, Container } from "react-bootstrap";
import styles from "./index.module.css";
import { useEffect } from "react";
 import useAuth from "../../hooks/useAuth";

export const Profile = () => {
  const {  getProfile, userProfile, /* user */ } = useAuth();
/*   const navigate = useNavigate();
 */
  const initialValues = {
    nameSurnmae: "",
    phoneWithArea: "",
    email: "",
    postCode: "",
    address: "",
    location: "",
    zone: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    getProfile(); 
  }, []);

  console.log("userProfile:", userProfile);


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Container className="d-flex justify-content-center">
            <Col xs={10} sm={6} md={6} lg={4} xl={4} className="center">
              <Image
                className={`${styles.profile}`}
                src="default-img-user.jpg"
              />
              <div className="text-center">
              {
                userProfile && (
                  <div>
                    Bienvenido {userProfile.user.name}
                  </div>
                )
              }
              </div>
              <div className="p-2 m-2 mb-5">
                <Form.Group className="mb-2 mt-2">
                  <Field
                    id="nameSurname"
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="nameSurname"
                    as={Form.Control}
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="nameSurname"
                    component={Form.Text}
                    className="text-danger ms-2"
                  ></ErrorMessage>
                </Form.Group>
                <Form.Group className="mb-2 mt-3">
                  <Field
                    id="phone"
                    type="number"
                    placeholder="Telefono con codigo de area"
                    name="phone"
                    as={Form.Control}
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="phone"
                    component={Form.Text}
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
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="email"
                    component={Form.Text}
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
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="postCode"
                    component={Form.Text}
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
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="address"
                    component={Form.Text}
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
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="location"
                    component={Form.Text}
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
                    className="shadow border-secondary"
                  ></Field>
                  <ErrorMessage
                    name="zone"
                    component={Form.Text}
                    className="text-danger ms-2"
                  ></ErrorMessage>
                </Form.Group>

                <div className="mt-3">
                  <div className={`d-grid gap-2 mt-4`}>
                    <Button
                      variant="primary"
                      className="w-80 p-2"
                      size="lg"
                      type="submit"
                    >
                      Guardar
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
