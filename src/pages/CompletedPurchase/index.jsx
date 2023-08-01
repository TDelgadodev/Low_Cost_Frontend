/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

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
          <Col xs={10} sm={6} md={10} lg={4} xl={4}>
            <Container className="md:d-flex flex-wrap-wrap justify-content-space-evenly">
              <div>
                <h2 className="mb-3">¡Ya casi terminamos!</h2>
                <p>
                  Complete el formulario y confirme el pedido, nuestro equipo de
                  ventas lo contactará a la brevedad. Si quiere agregar
                  artículos utilice 'Seguir Comprando' que se encuentra debajo.
                </p>
              </div>
              <Row>
                <Col xs={12} md={12} lg={6} xl={6}>
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
                </Col>
                <Col xs={12} md={6} lg={3} xl={3}>
                  <Form.Group className="mb-3">
                    <Field
                      id="phone"
                      type="number"
                      placeholder="Ingrese su número"
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
                </Col>
                <Col xs={12} md={6} lg={3} xl={3}>
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
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={6} lg={3} xl={3}>
                  <Form.Group>
                    <Field
                      id="postCode"
                      type="number"
                      placeholder="Código Postal"
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
                </Col>
                <Col xs={12} md={6} lg={9} xl={9}>
                  <Form.Group>
                    <Field
                      id="address"
                      type="text"
                      placeholder="Dirección"
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
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group>
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
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group>
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
                </Col>
              </Row>
            </Container>
            <Container className="mt-4">
              <Row className={`mb-5`}>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}
                >
                  <DeliveryDining
                    className={`${styles.itemsIcon}`}
                  ></DeliveryDining>
                  <div>
                    <p>ENTREGA INMEDIATA</p>
                    <small>Recibí el producto dentro de las 48hs</small>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}
                >
                  <Autorenew className={`${styles.itemsIcon}`}></Autorenew>
                  <div>
                    <p>TIEMPO DE PRUEBA</p>
                    <small>Tenés 72hs para probar el producto</small>
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}
                >
                  <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
                  <div>
                    <p>ENVÍO GRATUITO</p>
                    <small>Sin costo dentro de las zonas</small>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <div className="mt-3 mb-5">
                <p className="fw-bold fs-5">¡Selecciona cómo quieres pagar tu compra!</p>
                <div className={`d-grid gap-2`}>
                  <Button
                    variant="primary"
                    className="p-2 position-relative"
                    type="submit"
                    size="md"
                    xs={12} md={6} 
                  >
                    <ShoppingCartIcon className={styles.iconOverlay} />
                    ¡Ver compra!
                  </Button>
                </div>
              </div>
            </Container>
            <Container>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={`my-3 p-2 ${styles.textItems}`}
              >
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Mercado Pago"
                    control={<Radio />}
                    label="Mercado Pago"
                  />
                </RadioGroup>
              </Col>
            </Container>
            <Container>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={`d-flex my-3 p-2 ${styles.textItems}`}
              >
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Acordar Metodo de Pago"
                    control={<Radio />}
                    label="Acordar Metodo de Pago"
                  />
                </RadioGroup>
                <small className="mx-4 fs-6">
                  Al finalizar, te enviaremos los datos para que coordines el
                  pago con nosotros
                </small>
              </Col>
            </Container>
            <Container className="mb-5">
              <div className="d-flex justify-content-between mt-5">
                <div className="w-50 me-2">
                  <Button
                    variant="primary"
                    className="p-2 w-100"
                    type="submit"
                    size="md"
                  >
                    ¡Confirmar Pedido!
                  </Button>
                </div>
                <div className="w-50 ms-2">
                  <Button
                    variant="primary"
                    className="p-2 w-100"
                    type="submit"
                    size="md"
                  >
                    Seguir comprando
                  </Button>
                </div>
              </div>
            </Container>
          </Col>
        </Form>
      )}
    </Formik>
  );
};
