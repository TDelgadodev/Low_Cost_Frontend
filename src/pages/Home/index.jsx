import { Col, Container, Row } from "react-bootstrap"
import styles from "./Home.module.css"
import MyCarousel from "../../components/CarouselBrands";
import CarouselBanner from "../../components/CarouselBanner";
import PaginationCard from "../../components/PaginationCards";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import ShoppingCart from "../../components/CartModal";
import WhatsApp from "../../components/WhatsApp";
import CarouselCategories from "../../components/CarouselCategories";
import BannerStatic from "../../components/BannersHomeStatic";

export const Home = () => {

  return (
    <>
      <Container className={`${styles.bannerCarousel} mb-5`}>
        <CarouselBanner styles={{ maxWidth: '100%' }}></CarouselBanner>
      </Container>
      <Container>
        <MyCarousel></MyCarousel>
      </Container>
      <Container>
        <h2 className={`pb-5 ${styles.homeTitle}`} style={{ color: '#007BFF', textAlign: 'center' }}>¡CONOCÉ TODAS NUESTRAS OFERTAS!</h2>
        <BannerStatic></BannerStatic>
        {/* <p className={`${styles.homeText} pt-3`}>En LowCost, satisfacemos todas tus necesidades. Obtené el equipamiento
          comercial que requiere tu negocio pagando una cómoda cuota diaria.</p>
        <p className={`${styles.homeText} pb-2`}>Además, también ofrecemos todo lo necesario para equipar tu hogar.
          ¡Empezá a disfrutar ahora mismo!</p> */}
        <CarouselCategories></CarouselCategories>
        <h3 className={`${styles.homeTitle} pb-4`}>DESTACADOS DEL MES</h3>
      </Container>
      <Container>
        <PaginationCard></PaginationCard>
      </Container>
      <Container>
        <Row className={`justify-items-center align-items-center justify-content-center mb-5 ${styles.itemsContainer}`}>
          <Col xs={10} sm={10} md={3} lg={3} xl={3} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <DeliveryDining className={`${styles.itemsIcon}`}></DeliveryDining>
            <div>
              <p>ENTREGA INMEDIATA</p><small>Recibí el producto dentro de las 48hs</small>
            </div>
          </Col>
          <Col xs={10} sm={10} md={3} lg={3} xl={3} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <Autorenew className={`${styles.itemsIcon}`}></Autorenew>
            <div>
              <p>TIEMPO DE PRUEBA</p><small>Tenés 72hs para probar el producto</small>
            </div>
          </Col>
          <Col xs={10} sm={10} md={3} lg={3} xl={3} className={`d-flex align-items-center mx-3 my-3 ${styles.textItems}`}>
            <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
            <div>
              <p>ENVÍO GRATUITO</p><small>Sin costo dentro de las zonas</small>
            </div>
          </Col>
        </Row>
      </Container>
      <WhatsApp></WhatsApp>
      <ShoppingCart></ShoppingCart>
    </>
  );
};