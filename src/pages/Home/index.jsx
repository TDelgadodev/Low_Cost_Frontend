import { Container } from "react-bootstrap"
import styles from "./Home.module.css"
import MyCarousel from "../../components/CarouselBrands";
import CarouselBanner from "../../components/CarouselBanner";
import PaginationCard from "../../components/PaginationCards";
import ShoppingCart from "../../components/CartModal";
import WhatsApp from "../../components/WhatsApp";
import CarouselCategories from "../../components/CarouselCategories";
import BannerStatic from "../../components/BannersHomeStatic";
import { InfoCards } from "../../components/InfoCards";


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
        <h2 className={`pb-5 pt-2 ${styles.homeTitle}`} style={{ color: '#007BFF', textAlign: 'center' }}>¡CONOCÉ TODAS NUESTRAS OFERTAS!</h2>
        <BannerStatic></BannerStatic>
        <CarouselCategories></CarouselCategories>
        <h3 className={`${styles.homeTitle} pb-5 pt-2`}>DESTACADOS DEL MES</h3>
      </Container>
      <Container>
        <PaginationCard></PaginationCard>
      </Container>
      <InfoCards />
      <WhatsApp></WhatsApp>
      <ShoppingCart></ShoppingCart>
    </>
  );
};