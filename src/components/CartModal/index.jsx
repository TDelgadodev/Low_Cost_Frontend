import { useState } from "react";
import styles from './CartModal.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Col, Container, Row } from "react-bootstrap";

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 44.00; // Precio del producto
    const total = quantity * price;

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    return (
        <section className={`h-100 ${styles.sectionCustom}`}>
            <Container className="h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col lg={12}>
                        <div className={`${styles.cardRegistration} ${styles.cardRegistration2}`}>
                            <div className="card-body p-0">
                                <Row className="g-0">
                                    <Col lg={8}>
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h2 className="fw-bold mb-0 text-black">Carrito</h2>
                                                <small className="mb-0 text-muted">Items</small>
                                            </div>
                                            <hr className="my-4" />

                                            {/* Primer producto */}
                                            <Row className={`mb-4 d-flex justify-content-between align-items-center ${styles.productContainer}`}>
                                                <Col md={2} lg={2} xl={2}>
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                                        className={`img-fluid rounded-3 ${styles.imageContainer}`} alt="Cotton T-shirt"
                                                    />
                                                </Col>
                                                <Col md={3} lg={3} xl={3}>
                                                    <h6 className="text-muted mb-0">Secador de pelo marca Kanji v</h6>
                                                </Col>
                                                <Col md={3} lg={3} xl={2} className="d-flex">
                                                    <Button variant="link" className="px-1" onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}>
                                                        <i className="fas fa-minus"></i>
                                                    </Button>

                                                    <input
                                                        id="form1"
                                                        min="0"
                                                        name="quantity"
                                                        value={quantity}
                                                        type="number"
                                                        className={`form-control px-2 ${styles.formControl}`}
                                                        onChange={handleQuantityChange}
                                                    />

                                                    <Button variant="link" className="px-1" onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>
                                                        <i className="fas fa-plus"></i>
                                                    </Button>
                                                </Col>
                                                <Col md={3} lg={2} xl={2}>
                                                    <h6 className="mb-0">$ {total.toFixed(2)}</h6>
                                                </Col>
                                                <Col md={1} lg={1} xl={1} className="text-end">
                                                    <Button variant="warning"><a href="#!"><DeleteIcon style={{ color: 'white' }}></DeleteIcon></a></Button>
                                                </Col>
                                            </Row>
                                            {/* Fin del primer producto */}

                                            <hr className="my-4" />

                                            {/* Resto de los productos */}
                                            {/* Aquí se repetiría la misma estructura para cada producto adicional */}
                                            {/* Fin del resto de los productos */}
                                        </div>
                                    </Col>
                                    <Col lg={4} className={styles.bgGrey}>
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Sumario</h3>
                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h6 className="text-uppercase">subtotal</h6>
                                                <h6>$ 132.00</h6>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h6 className="text-uppercase">precio final</h6>
                                                <h6>$ 137.00</h6>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center mb-4">
                    <Button variant="primary" className="me-3">Comprar</Button>
                    <Button variant="danger">Limpiar Carrito</Button>
                </Col>
            </Container>
        </section>
    );
};

export default ShoppingCart;