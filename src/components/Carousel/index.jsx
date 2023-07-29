import { Component } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css'

class MyCarousel extends Component {
    render() {
        const desktopSettings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 500,
            cssEase: "linear"
        };

        const mobileSettings = {
            ...desktopSettings,
            slidesToShow: 3
        };

        return (
            <div>
                <Slider {...desktopSettings} className={`${styles.sliderContainerDesktop} d-none d-md-block`}>
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
                <Slider {...mobileSettings} className={`${styles.sliderContainerDesktop} d-md-none`}>
                    <div>
                        <a href="#"><img src="huawei.png" alt="" style={{ width: '75px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="motorola.png" alt="" style={{ width: '75px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="samsung.jpg" alt="" style={{ width: '75px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="xiaomi.png" alt="" style={{ width: '75px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="apple.png" alt="" style={{ width: '75px' }} /></a>
                    </div>
                    <div>
                        <a href="#"><img src="samsung.jpg" alt="" style={{ width: '75px' }} /></a>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default MyCarousel