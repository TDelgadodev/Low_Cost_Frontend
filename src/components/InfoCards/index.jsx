import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import { Col, Container, Row } from "react-bootstrap";
import styles from './InfoCards.module.css'

export default function InfoCards() {
    return (
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
                        <p>ENVÍO GRATUITO</p><small>Sin costo dentro de zona norte</small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}