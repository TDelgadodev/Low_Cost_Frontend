import { useContext } from 'react';
import Slider from 'react-slick';
import styles from './CarouselCategories.module.css'
import { CategoriesContext } from '../../context/CategoriesProvider';

function CarouselCategories() {

    const { categories } = useContext(CategoriesContext)

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
                {categories.map((category) => (
                    <div key={category.id} className={`${styles.structure}`}>
                        <a href={`/search/${category.id}`}><img src={`/categories/${category.image}`} alt={category.name} style={{ width: '150px' }} /></a>
                        <p>{category.name}</p>
                    </div>
                ))}
            </Slider>
            <Slider {...mobileSettings} className={`${styles.sliderContainerDesktop} d-md-none`}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <a href={`/search/${category.id}`}><img src={`/categories/${category.image}`} alt={category.name} style={{ width: '75px' }} /></a>
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default CarouselCategories