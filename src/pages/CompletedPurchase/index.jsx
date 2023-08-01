/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";

export const CompletedPurchase = () => {
  const initialValues = {
    nameSurname: "",
    email: "",
    phone: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
          className={`${styles.formFinishBuying} m-2`}
        >
          <Col xs={10} sm={6} md={6} lg={4} xl={4}>
            <div>
              <h2 className="mb-3">¡Ya casi terminamos!</h2>
              <p>
                Complete el formulario y confirme el pedido, nuestro equipo de
                ventas lo contactara a la brevedad. Si quiere agregar articulos
                utilice 'Seguir Comprando' que se encuentra debajo
              </p>
            </div>
            <Form.Group className="mb-3">
              <Field
                id="nameSurname"
                type="text"
                placeholder="Nombre y apellido"
                name="nameSurname"
                as={Form.Control}
                className="shadow border-secondary"
                onFocus={() => formik.setFieldError("nameSurname", "")}
              ></Field>
              <ErrorMessage
                name="nameSurname"
                component={Form.Text}
                className="text-danger ms-2"
              ></ErrorMessage>
            </Form.Group>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3 mt-3">
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
            <Form.Group className="mb-3 mt-3">
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
            <Form.Group className="mb-3 mt-3">
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
            <Form.Group className="mb-4 mt-3">
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
            <Container>
        <Row className={`justify-items-center align-items-center justify-content-center mb-5 ${styles.itemsContainer}`}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <DeliveryDining className={`${styles.itemsIcon}`}></DeliveryDining>
            <div>
              <p>ENTREGA INMEDIATA</p><small>Recibí el producto dentro de las 48hs</small>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <Autorenew className={`${styles.itemsIcon}`}></Autorenew>
            <div>
              <p>TIEMPO DE PRUEBA</p><small>Tenés 72hs para probar el producto</small>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
            <div>
              <p>ENVÍO GRATUITO</p><small>Sin costo dentro de las zonas</small>
            </div>
          </Col>
        </Row>
      </Container>
            <div className="mt-3">
              <div className={`d-grid gap-2`}>
                <Button
                  variant="primary"
                  className="p-2"
                  type="submit"
                  size="md"
                >
                  ¡Confirmar Pedido!
                </Button>
              </div>
            </div>
            <div className="mt-3 mb-5">
              <div className={`d-grid gap-2`}>
                <Button
                  variant="primary"
                  className="p-2"
                  type="submit"
                  size="md"
                >
                  Seguir comprando
                </Button>
              </div>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
