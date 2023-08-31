/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./index.module.css";
import InfoCards from "../../components/infoCards";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import ShoppingCart from "../../components/CartModal";
import WhatsApp from "../../components/WhatsApp";

export const CompletedPurchase = () => {
  const initialValues = {
    name: "",
    surname: "",
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
          <Col xs={10} sm={6} md={10} lg={10} xl={10}>
            <WhatsApp></WhatsApp>
            <ShoppingCart></ShoppingCart>
            <Container className="md:d-flex flex-wrap-wrap justify-content-space-evenly">
              <div>
                <h2 className={`${styles.title} my-4`}>Complete su Compra</h2>
                <p className={`${styles.text} my-5`}>
                  Por favor, complete el formulario y confirme su pedido. Nuestro equipo de ventas se pondrá en contacto con usted en el menor tiempo posible.
                  Si desea agregar más artículos, puede utilizar la opción 'Seguir Comprando' que se encuentra a continuación.
                </p>
              </div>
              <Row className={`${styles.inputs}`}>

                <Col xs={12} md={12} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="name"
                      type="text"
                      placeholder="Ingresá tu nombre"
                      name="name"
                      as={Form.Control}
                      onFocus={() => formik.setFieldError("name", "")}
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={12} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="surname"
                      type="text"
                      placeholder="Ingresá tu apellido"
                      name="surname"
                      as={Form.Control}
                      onFocus={() => formik.setFieldError("surname", "")}
                    ></Field>
                    <ErrorMessage
                      name="surname"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="email"
                      type="email"
                      placeholder="Ingresá tu email"
                      name="email"
                      as={Form.Control}
                      onFocus={() => formik.setFieldError("email", "")}
                    ></Field>
                    <ErrorMessage
                      name="email"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="phone"
                      type="tel"
                      placeholder="Ingresá tu teléfono"
                      name="phone"
                      as={Form.Control}
                      onFocus={() => formik.setFieldError("phone", "")}
                    ></Field>
                    <ErrorMessage
                      name="phone"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="dni"
                      type="number"
                      placeholder="Ingresá tu DNI"
                      name="dni"
                      as={Form.Control}
                      onFocus={() => formik.setFieldError("dni", "")}
                    ></Field>
                    <ErrorMessage
                      name="dni"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="street"
                      type="text"
                      placeholder="Ingresá tu calle"
                      name="street"
                      as={Form.Control}
                    ></Field>
                    <ErrorMessage
                      name="street"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="streetNumber"
                      type="number"
                      placeholder="Ingresá tu nº de calle"
                      name="streetNumber"
                      as={Form.Control}
                    ></Field>
                    <ErrorMessage
                      name="streetNumber"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Field
                      style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                      id="postCode"
                      type="number"
                      placeholder="Ingresá tu código postal"
                      name="postCode"
                      as={Form.Control}
                    ></Field>
                    <ErrorMessage
                      name="postCode"
                      component={Form.Text}
                      className="text-danger ms-2"
                    ></ErrorMessage>
                  </Form.Group>
                </Col>

              </Row>
            </Container>

            <Container>
              <div className="mt-3 mb-5">
                <h5 className={`${styles.subtitle} my-5`}>A continuación, seleccioná cómo querés pagar tu compra</h5>
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
                  <a href="/">                  <Button
                    variant="primary"
                    className="p-2 w-100"
                    size="md"
                  >
                    Seguir Comprando
                  </Button></a>
                </div>
              </div>
            </Container>
          </Col>
          <InfoCards />
        </Form>
      )}
    </Formik>
  );
};
