import { Button, Col, Container, Row } from "react-bootstrap";
import CarouselIMG from "../../components/CarrouselIMG";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import styles from "./index.module.css";

export const Detail = () => {
  return (
    <>
      <Container>
        <CarouselIMG></CarouselIMG>
      </Container>
      <Container>
        <div className="m-3">
          <h2 style={{ fontSize: "1.5rem" }}>Titulo del producto</h2>
          <p style={{ fontWeight: "bold" }}>$167.999,00</p>
        </div>
        <div className="m-3">
          <div className={`d-grid gap-2`}>
            <Button variant="primary" className="p-2" type="submit" size="md">
              Agregar al carrito
            </Button>
          </div>
        </div>
        <div className="m-3">
          <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            Lo que tenes que saber de este producto:
          </p>
          <ul style={{ fontSize: "0.8rem" }}>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
        <Row className={`mb-5 p-3`}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`d-flex align-items-center mb-4 ${styles.textItems}`}
          >
            <DeliveryDining className={`${styles.itemsIcon}`}></DeliveryDining>
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
            className={`d-flex align-items-center mb-4 ${styles.textItems}`}
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
            className={`d-flex align-items-center ${styles.textItems}`}
          >
            <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
            <div>
              <p>ENVÍO GRATUITO</p>
              <small>Sin costo dentro de las zonas</small>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
