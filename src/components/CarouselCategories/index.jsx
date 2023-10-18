import { useContext } from 'react';
import Slider from 'react-slick';
import styles from './CarouselCategories.module.css'
import { CategoriesContext } from '../../context/CategoriesProvider';
import { useProducts } from '../../hooks/useProduct';
import { Link } from 'react-router-dom';

function CarouselCategories() {

    const { categories } = useContext(CategoriesContext)
    const { getProductByCategory } = useProducts()

    const handleCategoryClick = (categoryId) => {
        getProductByCategory(categoryId)
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
                {categories.map((category) => (
                    <div key={category.id} className={`${styles.structure}`}>
                        <Link to={`/store`}>
                            <img src={`/categories/${category.image}`}
                                alt={category.name}
                                style={{ width: '135px' }}
                                onClick={() => handleCategoryClick(category.id)} />
                        </Link>
                        <p>{category.name}</p>
                    </div>
                ))}
            </Slider>
            <Slider {...mobileSettings} className={`${styles.sliderContainerDesktop} d-md-none`}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <Link to={`/store/${category.id}`}>
                            <img src={`/categories/${category.image}`}
                                alt={category.name}
                                style={{ width: '75px' }}
                                onClick={() => handleCategoryClick(category.id)} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );

}

export default CarouselCategories