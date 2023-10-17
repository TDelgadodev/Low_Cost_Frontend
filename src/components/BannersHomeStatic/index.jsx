import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './BannersHomeStatic.module.css'
import axios from 'axios';

class BannerStatic extends Component {
    state = {
        imageUrls: [],
    };

    componentDidMount() {
        // Realiza una solicitud al servidor para obtener las rutas de las imágenes
        /* axios.get("http://localhost:3000/api/upload/get-static-banners") */
        axios.get("https://gabriellanzillotti.wnpower.host/api/upload/get-static-banners")
            .then((response) => {
                this.setState({ imageUrls: response.data.data });
                console.log('response static:', response.data.data);
            })
            .catch((error) => {
                console.error("Error al obtener las rutas de las imágenes:", error);
            });
    }
    render() {
        const { imageUrls } = this.state;
        const defaultImageUrls = ['/anuncio.jpg', '/anuncio.jpg', '/anuncio.jpg'];


        return (
            <Container>
                <Row>
                    {imageUrls && imageUrls.length > 0 ? (
                        imageUrls.map((imageInfo, index) => (
                            <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                                <div className={`${styles.banner}`}>
                                    <img src={imageInfo.path} alt={`Banner ${index + 1}`} />
                                </div>
                            </Col>
                        ))
                    ) : (
                        defaultImageUrls.map((defaultImageUrl, index) => (
                            <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                                <div className={`${styles.banner}`}>
                                    <img src={defaultImageUrl} alt={`StaticBanners`} />
                                </div>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        );
    }
}

export default BannerStatic