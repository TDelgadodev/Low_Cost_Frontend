import { Col, Container, Row } from "react-bootstrap"
import styles from "./Home.module.css"
import MyCarousel from "../../components/Carousel";
import CarouselBanner from "../../components/CarouselBanner";
import PaginationCard from "../../components/PaginationCards";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";

export const Home = () => {
  return (
    <>
      <Container>
        <MyCarousel></MyCarousel>
      </Container>
      <Container className={`${styles.bannerCarousel} mb-5`}>
        <CarouselBanner styles={{ maxWidth: '100%' }}></CarouselBanner>
      </Container>
      <Container>
        <h2 className={`${styles.homeTitle}`}>¡Conocé todas nuestras ofertas!</h2>
        <p className={`${styles.homeText} pt-3`}>En LowCost, satisfacemos todas tus necesidades. Obtené el equipamiento
          comercial que requiere tu negocio pagando una cómoda cuota diaria.</p>
        <p className={`${styles.homeText} pb-2`}>Además, también ofrecemos todo lo necesario para equipar tu hogar.
          ¡Empezá a disfrutar ahora mismo!</p>
        <h3 className={`${styles.homeTitle} pb-4`}>Destacados del Mes</h3>
      </Container>
      <Container>
        <PaginationCard></PaginationCard>
      </Container>
      <Container>
        <Row className="justify-items-center align-items-center mb-3">
          <Col className={`${styles.textItems}`}>
            <DeliveryDining></DeliveryDining>
            <p>ENTREGA INMEDIATA</p>
            <small>Recibí el producto dentro de las 48hs</small>
          </Col>
          <Col className={`${styles.textItems}`}>
            <Autorenew></Autorenew>
            <p>TIEMPO DE PRUEBA</p>
            <small>Tenés 72hs para probar el producto</small>
          </Col>
          <Col className={`${styles.textItems}`}>
            <AttachMoney></AttachMoney>
            <p>ENVÍO GRATUITO</p>
            <small>Sin costo dentro de las zonas</small>
          </Col>
        </Row>
      </Container>
    </>
  );
};
