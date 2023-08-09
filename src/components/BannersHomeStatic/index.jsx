import { Container, Row, Col } from 'react-bootstrap';
import styles from './BannersHomeStatic.module.css'

const BannerStatic = () => {
    return (
        <Container>
            <Row>
                <Col md={4} sm={6} xs={12} className="mb-3">
                    <div className={`${styles.banner}`}>
                        <img src="anuncio.jpg" alt="Banner 1" />
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12} className="mb-3">
                    <div className={`${styles.banner}`}>
                        <img src="anuncio.jpg" alt="Banner 2" />
                    </div>
                </Col>
                <Col md={4} sm={6} xs={12} className="mb-3">
                    <div className={`${styles.banner}`}>
                        <img src="anuncio.jpg" alt="Banner 3" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BannerStatic