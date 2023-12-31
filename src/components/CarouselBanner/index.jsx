import { Component } from "react";
import Slider from "react-slick";
import styles from './CarouselBanner.module.css'
import axios from "axios";

class CarouselBanner extends Component {
    state = {
        imageUrls: [],
    };

    componentDidMount() {
        // Realiza una solicitud al servidor para obtener las rutas de las imágenes
        /* axios.get("http://localhost:3000/api/upload/horizontal-banners") */
        axios.get("https://lowcostarg.com.ar/api/upload/horizontal-banners")
            .then((response) => {
                this.setState({ imageUrls: response.data.data });
                console.log('response:', response.data.data);
            })
            .catch((error) => {
                console.error("Error al obtener las rutas de las imágenes:", error);
            });
    }

    render() {
        const { imageUrls } = this.state;

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div>
                <Slider {...settings} className={`${styles.bannerContainer}`}>
                    {imageUrls && imageUrls.length > 0 ? (
                        imageUrls.map((imageUrl, index) => (
                            <div key={index}>
                                <img src={imageUrl.path} alt={`Banner ${index + 1}`} />
                            </div>
                        ))
                    ) : (
                        <div>
                            <img src='/banner1.jpg' alt='banner1' />
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
}

export default CarouselBanner;