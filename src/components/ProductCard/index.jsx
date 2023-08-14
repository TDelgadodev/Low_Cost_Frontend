import { Card, Button } from "react-bootstrap"
import PropTypes from 'prop-types'
import { useCart } from '../../hooks/useCart'
import styles from './ProductCardOffer.module.css'
import { toast } from 'react-toastify'
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {

    const { addToCart } = useCart()

    function handleAddToCart(product) {
        const { id, name, price, imageUrls } = product;
        const productToAdd = { idProduct: id, name, price, imageUrls };
        addToCart(productToAdd);
        toast.success('¡Producto agregado con éxito!');
    }

    const imageUrl = product.imageUrls && product.imageUrls[0] ? product.imageUrls[0] : 'nofoto.png';

    return (
        <Card className={`${styles.cardContainer}`}>
            <Link>
                <Card.Img variant="top" src={imageUrl}
                    className={`${styles.cardImg}`} />
            </Link>
            <Card.Body>
                <Link className={`${styles.cardLink}`}><p className={`pb-3 ${styles.cardName}`}>{product.name}</p></Link>
                <Card.Text className={`${styles.cardPrice}`}>
                    <b>${product.price.toLocaleString('es-AR')}</b>
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

ProductCard.propTypes = {
    product: PropTypes.shape({
        imageUrls: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}
