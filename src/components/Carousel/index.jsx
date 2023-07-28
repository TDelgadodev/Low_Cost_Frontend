import { Component } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css'


class MyCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 500,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings} className={`${styles.sliderContainer}`}>
                    <div>
                        <a href="#"><img src="huawei.png" alt="" style={{ width: '100px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="motorola.png" alt="" style={{ width: '100px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="samsung.jpg" alt="" style={{ width: '100px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="xiaomi.png" alt="" style={{ width: '100px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="apple.png" alt="" style={{ width: '100px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="samsung.jpg" alt="" style={{ width: '100px' }} /></a>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default MyCarousel