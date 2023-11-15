import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function PaginationRelated({ categoryId }) {
    const { filteredProductsCategory, getProductByCategory } = useProducts();
    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        // Llamar a la función para obtener productos por categoría solo si cambia categoryId
        if (categoryId) {
            getProductByCategory(categoryId)
                .then((productData) => {
                    // Actualizar el estado de los productos
                    setCurrentProducts(productData);
                })
                .catch((error) => {
                    console.error('Error al obtener productos por categoría:', error);
                });
        }
    }, [categoryId, getProductByCategory]);

    // Comprueba si filteredProductsCategory está vacío o nulo.
    if (!currentProducts) {
        console.log('currentProducts is empty.'); // Agregar este log
        return <p>Cargando productos...</p>;
    }

    console.log('currentProducts:', currentProducts); // Agregar este log

    return (
        <Container>
            <Row>
                {currentProducts.map((product) => (
                    <Col xs={6} sm={6} md={4} lg={3} xl={3} key={product.id} className="pb-5">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

PaginationRelated.propTypes = {
    categoryId: PropTypes.number,
}
