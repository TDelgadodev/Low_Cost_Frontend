import PropTypes from 'prop-types'
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from './OrderSelector.module.css'

function OrderSelector({ orderBy, handleOrderByChange }) {
    return (
        <Container className='justify-content-center pb-5'>
            <Row className='d-flex justify-content-center'>
                <Col xs={4} sm={4} md={4} lg={4} className='mb-3'>
                    <Form>
                        <Form.Select value={orderBy} onChange={handleOrderByChange} className={`${styles.select}`}>
                            <option value="">Ordenar por Nombre</option>
                            <option value="name_asc">Nombre, ascendente</option>
                            <option value="name_desc">Nombre, descendente</option>
                        </Form.Select>
                    </Form>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className='mb-3'>
                    <Form>
                        <Form.Select value={orderBy} onChange={handleOrderByChange} className={`${styles.select}`}>
                            <option value="">Ordenar por Precio</option>
                            <option value="price_asc">Precio, ascendente</option>
                            <option value="price_desc">Precio, descendente</option>
                        </Form.Select>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

OrderSelector.propTypes = {
    orderBy: PropTypes.string.isRequired,
    handleOrderByChange: PropTypes.func.isRequired,
};

export default OrderSelector;
