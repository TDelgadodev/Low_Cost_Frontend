import { useContext } from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css'
import { BrandsContext } from '../../context/BrandsProvider';
import { useProducts } from '../../hooks/useProduct';
import { Link } from 'react-router-dom';

function MyCarousel() {

    const { brands } = useContext(BrandsContext)
    const { getProductByBrand } = useProducts()

    const handleCategoryClick = (brandId) => {
        getProductByBrand(brandId)
    }

    const desktopSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 300,
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
                        <Link to={`/store`}>
                            <img src={`/brands/${brand.image}`}
                                alt={brand.name}
                                style={{ width: '90px' }}
                                onClick={() => handleCategoryClick(brand.id)} />
                        </Link>
                    </div>
                ))}
            </Slider>
            <Slider {...mobileSettings} className={`${styles.sliderContainerDesktop} d-md-none`}>
                {brands.map((brand) => (
                    <div key={brand.id}>
                        <Link to={`/store`}>
                            <img src={`/brands/${brand.image}`}
                                alt={brand.name}
                                style={{ width: '75px' }}
                                onClick={() => handleCategoryClick(brand.id)} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default MyCarousel