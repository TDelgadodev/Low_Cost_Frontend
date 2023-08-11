import { useContext } from 'react';
import Slider from 'react-slick';
import styles from './CarouselCategories.module.css'
import { CategoriesContext } from '../../context/CategoriesProvider';
/* import { useProducts } from '../../hooks/useProduct'; */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function CarouselCategories({ updateFilter }) {

    const { categories } = useContext(CategoriesContext)
    /* const { getProductByCategory } = useProducts() */

    const handleCategoryClick = (categoryId) => {
        updateFilter('category', categoryId)
    }

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
                        <Link to={`/search/${category.id}`}>
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
                        <Link to={`/search/${category.id}`}>
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

CarouselCategories.propTypes = {
    updateFilter: PropTypes.func.isRequired // Validate that updateFilter is a required function prop
};

export default CarouselCategories