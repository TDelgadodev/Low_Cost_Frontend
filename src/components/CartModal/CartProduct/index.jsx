import { Button, Col, Row } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CartProduct.module.css'
import PropTypes from 'prop-types'
import { useCart } from "../../../hooks/useCart"

export default function CartProduct({ product }) {
    const { removeAllFromCart, removeOneFromCart, addToCart } = useCart()
    const imageUrl = product.imageUrls && product.imageUrls[0] ? product.imageUrls[0] : 'nofoto.png';
    const totalProductPrice = product.price * product.quantity;
    /* console.log('producto del carrito', product) */
    return (
        <Row className={`mb-4 d-flex justify-content-between align-items-center ${styles.productContainer}`}>
            <Col xs={4} md={2} lg={2} xl={2}>
                <img
                    src={imageUrl}
                    className={`${styles.imageContainer}`} alt={product.name}
                />
            </Col>
            <Col md={3} lg={3} xl={3}>
                <small className="text-muted mb-0">{product.name}</small>
            </Col>
            <Col md={3} lg={3} xl={2} className="d-flex align-items-center justify-content-between">
                <Button variant="link" className="px-1" onClick={() => removeOneFromCart(product.idProduct)}>
                    <i className="fas fa-minus"></i>
                </Button>
                <p className="m-0">{product.quantity}</p>
                <Button variant="link" className="px-1" onClick={() => addToCart(product)}>
                    <i className="fas fa-plus"></i>
                </Button>
            </Col>
            <Col md={3} lg={2} xl={2}>
                <small className="mb-0 p-0">$ {totalProductPrice.toLocaleString('es-AR')}</small>
            </Col>
            <Col md={1} lg={1} xl={1} className="text-end">
                <Button onClick={() => removeAllFromCart(product.idProduct)} variant="warning"><DeleteIcon style={{ color: 'white' }}></DeleteIcon></Button>
            </Col>

        </Row>
    )
}

CartProduct.propTypes = {
    product: PropTypes.object.isRequired
}