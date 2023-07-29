import { Component } from "react";
import Slider from "react-slick";
import styles from './CarouselBanner.module.css'

class CarouselBanner extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 6500,
            autoplay: true,
            autoplaySpeed: 4500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings} className={`${styles.bannerContainer}`}>
                    <div>
                        <img src="banner1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="banner2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="banner3.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default CarouselBanner