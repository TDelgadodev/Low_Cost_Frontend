import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";
import InfoCards from "../../components/infoCards";
import ShoppingCart from "../../components/CartModal";
import WhatsApp from "../../components/WhatsApp";
import { useState, useEffect } from "react";
import axios from "axios";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { useCart } from "../../hooks/useCart";
import CartProduct from "../../components/CartModal/CartProduct";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"; /*  */

export const CompletedPurchase = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    dni: "",
    street: "",
    streetNumber: "",
    postCode: "",
  };

  initMercadoPago("TEST-70a33ced-250d-4afe-92bd-5f8a057bb918");

  const { cart, orderTotal } = useCart();
  const navigate = useNavigate();
  const createPreference = async () => {
    setIsLoading(true);

    try {
      const description = cart.cartItems.map((item) => item.name).join(", ");
      const price = orderTotal;
      const quantity = 1;
      /* const quantity = getTotalProductsInCart(cart.cartItems); */

      const response = await axios.post(
        "http://localhost:3000/mp/create_preference",
        {
          description,
          price,
          quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      throw new Error("Hubo un error al realizar la compra");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const handleContactSeller = async (values) => {
    setIsLoading(true);

    try {
      const phoneAsNumber = parseInt(values.phone, 10);

      if (!isNaN(phoneAsNumber)) {
        values.phone = phoneAsNumber;
      } else {
        alert("El número de teléfono ingresado no es válido");
        return;
      }
      if (cart.length === 0) {
        alert("No hay productos en el carrito para comprar.");
        return;
      }

      const cartItems = cart.cartItems;

      const response = await axios.post(
        "http://localhost:3000/api/users/finish-purchase",
        {
          values,
          cartItems,
        }
      );

      console.log('Datos del carrito:', cartItems);
      console.log('Datos del formulario:', values);

      if (response.status === 200) {
        alert("Correo electrónico enviado al vendedor y al usuario");
        localStorage.removeItem("cartItems");
        // Puedes realizar acciones adicionales aquí si es necesario
        navigate("/");
        window.location.reload();
      } else {
        alert("Error al enviar el correo electrónico");
      }
    } catch (error) {
      console.log(error);
      alert("Error al enviar el correo electrónico");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (preferenceId) {
      localStorage.removeItem("cartItems");
    }
  }, [preferenceId]);

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
                  Por favor, complete el formulario y confirme su pedido. <br />{" "}
                  Nuestro equipo de ventas se pondrá en contacto con usted en el
                  menor tiempo posible.
                </p>
              </div>
              <Row className={`${styles.inputs}`}>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                {cart.cartItems && cart.cartItems.length > 0 && (
                  <Field
                    type="hidden"
                    name="cartItems"
                    value={JSON.stringify(cart.cartItems)}
                  />
                )}

                <Col xs={12} md={6} lg={6} xl={6}>
                  <Form.Group className="mb-3">
                    <Field
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
                      style={{ borderColor: "rgba(206, 206, 206, 0.795)" }}
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
              <hr className="my-4" />
              <div className={`${styles.productsContainer}`}>
                {cart.cartItems.length === 0 && (
                  <h5 className={`${styles.subtext}`}>
                    ¡Añadí productos para comprar!
                  </h5>
                )}
                {cart.cartItems.map((product) => (
                  <CartProduct key={product.idProduct} product={product} />
                ))}
              </div>
              <hr className="my-4" />
            </Container>
            <Container>
              <div className="mt-3 mb-5">
                <h5 className={`${styles.subtitle} my-5`}>
                  A continuación, seleccioná cómo querés pagar tu compra
                </h5>
              </div>
            </Container>

            <Container className="mb-5">
              <div className="d-flex justify-content-between mt-5">
                <div className="w-50 me-2">
                  <Button
                    variant="primary"
                    size="md"
                    style={{ fontFamily: "Poppins" }}
                    className="p-2 w-100"
                    onClick={handleBuy}
                    disabled={isLoading} // Deshabilitar el botón mientras se carga
                  >
                    {isLoading ? "Comprando..." : "Comprar con Mercado Pago"} {/* Cambiar el texto del botón según el estado de carga */}
                  </Button>
                </div>
                <div className="w-50 ms-2">
                  <Button
                    variant="primary"
                    size="md"
                    style={{ fontFamily: "Poppins" }}
                    className="p-2 w-100"
                    onClick={() => handleContactSeller(formik.values)}
                    disabled={isLoading} // Deshabilitar el botón mientras se carga
                  >
                    {isLoading ? "Comprando..." : "Acordar con Vendedor"} {/* Cambiar el texto del botón según el estado de carga */}
                  </Button>
                </div>
              </div>
              {preferenceId && (
                <Wallet
                  customization={{
                    texts: {
                      action: "pay",
                      valueProp: "security_safety",
                    },
                  }}
                  initialization={{ preferenceId, redirectMode: "blank" }}
                />
              )}
            </Container>
            <p className={`${styles.text} my-5`}>
              Una vez que completes tu compra, recibirás por correo electrónico
              las indicaciones detalladas junto con los datos necesarios para
              coordinar la entrega de tu producto en el menor tiempo posible.
            </p>
          </Col>
          <InfoCards />
        </Form>
      )}
    </Formik>
  );
};
