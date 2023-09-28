import { Button, Col, Container, Row } from "react-bootstrap";
import CartProduct from './CartProduct';
import { useCart } from '../../hooks/useCart';
import CancelIcon from '@mui/icons-material/Cancel';
import useModal from '../../hooks/useModal';
import { getTotalProductsInCart } from '../../utils/cart.utils';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from './CartModal.module.css';

const ShoppingCart = () => {

    const navigate = useNavigate();
    const { isOpen, toggleModal } = useModal()
    const { cart, clearCart, /* sendOrder, */ orderTotal } = useCart()
    const totalProductsInCart = getTotalProductsInCart(cart.cartItems);

    return (
        <>
            {isOpen && (
                <>
                    <div className={`${styles.overlay}`} onClick={toggleModal} />
                    <section className={`${styles.sectionCustom}`}>
                        <Button variant="link" className={`${styles.cancelButton}`} onClick={toggleModal}>
                            <CancelIcon className={`${styles.iconClose}`} />
                        </Button>
                        <Container className="h-100">
                            <Row className="d-flex justify-content-center align-items-center h-100">
                                <Col lg={12}>
                                    <div className={`${styles.cardRegistration} ${styles.cardRegistration2}`}>
                                        <div className="card-body p-0">
                                            <Row className="g-0">
                                                <Col xs={12} md={8} xl={8}>
                                                    <div className={`px-4 pt-4`}>
                                                        <div className="pt-1 mt-2 d-flex justify-content-between align-items-center mb-5">
                                                            <h3 className="fw-bold mb-0 text-black">Carrito</h3>
                                                            <small className="mb-0 px-5 text-muted">{totalProductsInCart} Items</small>
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className={`${styles.productsContainer} overflow-auto`}>
                                                            {cart.cartItems.length === 0 && (
                                                                <h5>¡Añadí productos para comprar!</h5>
                                                            )}
                                                            {cart.cartItems.map((product) => (
                                                                <CartProduct key={product.idProduct} product={product} />
                                                            ))}
                                                        </div>
                                                        <hr className="my-4" />
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4} xl={4} className={styles.bgGrey}>
                                                    <div className="px-4 pt-4">
                                                        <h3 className="fw-bold mb-5 mt-2 pt-1">Sumario</h3>
                                                        <hr className="my-4" />
                                                        <div className="d-flex justify-content-between mb-4">
                                                            <h6 className="text-uppercase">subtotal</h6>
                                                            {<h6>$ {orderTotal.toLocaleString('es-AR')}</h6>}
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className="d-flex justify-content-between mb-5">
                                                            <h6 className="text-uppercase">precio final</h6>
                                                            {<h6>$ {orderTotal.toLocaleString('es-AR')}</h6>}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                            <Col className="d-flex justify-content-center mb-4">
                                <Button size='md' variant="outline-danger" className="me-3" onClick={clearCart}>Vaciar Carrito</Button>
                                <Link to="/finish-buying" onClick={() => {
                                    navigate("/finish-buying");
                                    window.location.reload();
                                }}>
                                    <Button size='md' variant="primary">Comprar</Button>
                                </Link>
                            </Col>
                        </Container>
                    </section>
                </>
            )}
        </>
    );
};

export default ShoppingCart;