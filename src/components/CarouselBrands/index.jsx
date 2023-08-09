import { useContext } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css'
import { BrandsContext } from '../../context/BrandsProvider';

function MyCarousel() {

    const { brands } = useContext(BrandsContext)

    const desktopSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 500,
        cssEase: "ease-out"
    };

    const mobileSettings = {
        ...desktopSettings,
        slidesToShow: 3
    };

    return (
        <div>
            <Slider {...desktopSettings} className={`${styles.sliderContainerDesktop} d-none d-md-block`}>
                {brands.map((brand) => (
                    <div key={brand.id}>
                        <a href={`/search/${brand.id}`}><img src={`/brands/${brand.image}`} alt={brand.name} style={{ width: '90px' }} /></a>
                    </div>
                ))}
            </Slider>
            <Slider {...mobileSettings} className={`${styles.sliderContainerDesktop} d-md-none`}>
                {brands.map((brand) => (
                    <div key={brand.id}>
                        <a href={`/search/${brand.id}`}><img src={`/brands/${brand.image}`} alt={brand.name} style={{ width: '75px' }} /></a>
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default MyCarousel