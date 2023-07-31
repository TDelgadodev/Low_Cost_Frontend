import { Card, Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import { useCart } from '../../hooks/useCart'
import styles from './ProductCardOffer.module.css'

export default function ProductCardOffer({ product }) {
    /* console.log("Product in ProductCardOffer:", product); */

    /*     const { handleModalClick, handleProductIdClick } = useProducts() */
    const { addToCart } = useCart()

    function handleAddToCart(product) {
        addToCart(product)
    }

    return (
        <Card>
            <Card.Img variant="top" src={product.imageUrls[0]}
                className={`${styles.cardImg}`} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <b>${product.price}</b>
                </Card.Text>
                <Button variant="primary"
                    onClick={() => {
                        handleAddToCart(product)
                    }}
                    style={{ width: '100%' }}>Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );
}

ProductCardOffer.propTypes = {
    product: PropTypes.shape({
        imageUrls: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}
