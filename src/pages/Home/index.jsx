import { Row, Col, Container } from "react-bootstrap"
import ProductCard from "../../components/ProductCard"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <>
    <Row className={`${styles.homeContainer}`}>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={3} className="pb-5"><ProductCard></ProductCard></Col>
    </Row>
    <Container>
      <h1 style={{textAlign: 'center'}}><strong>Welcome to our store</strong></h1>
    </Container>
    </>
  );
};
