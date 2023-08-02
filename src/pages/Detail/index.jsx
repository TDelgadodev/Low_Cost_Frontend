import { Button, Col, Container, Row } from "react-bootstrap";
import CarouselIMG from "../../components/CarrouselIMG";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import styles from "./index.module.css";

export const Detail = () => {
  return (
    <>
      <Container className={`${styles.containerCustomDetails}`}>
        <CarouselIMG></CarouselIMG>
        <div className="m-3">
          <h2>Titulo del producto</h2>
          <p>$167.999,00</p>
          <Row className={`mb-5 p-3`}>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={`d-flex align-items-center mb-4 ${styles.textItems}`}
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
        </div>
      </Container>
      <Container>
        <div className={`m-3 ${styles.containerCustomButton}`}>
          <div className={`d-grid gap-2`}>
            <Button variant="primary" className="p-2" type="submit" size="md">
              Agregar al carrito
            </Button>
          </div>
        </div>
        <div className={`m-3 ${styles.containerCustomcharacteristics}`}>
          <p>
            Lo que tenes que saber de este producto:
          </p>
          <ul> 
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
      </Container>
    </>
  );
};
