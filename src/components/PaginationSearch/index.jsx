import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';

export default function PaginationSearch() {
    const { filteredKeyword, filteredProductsCategory, filteredProductsBrand } = useProducts();
    const ProductsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {

        const startIndex = (currentPage - 1) * ProductsPerPage;
        const endIndex = startIndex + ProductsPerPage;

        let productsToDisplay = [];

        if (filteredKeyword) {
            productsToDisplay = filteredKeyword.slice(startIndex, endIndex);
        } else if (filteredProductsBrand) {
            productsToDisplay = filteredProductsBrand.slice(startIndex, endIndex);
        } else if (filteredProductsCategory) {
            productsToDisplay = filteredProductsCategory.slice(startIndex, endIndex);
        }
        if (productsToDisplay.length > 0) {
            setCurrentProducts(productsToDisplay);
        }
    }, [filteredKeyword, filteredProductsCategory, filteredProductsBrand, currentPage]);


    /* if (!currentProducts || currentProducts.length === 0) {
        return (
            <Row className="p-5 m-5">
                <h2 className="text-center">¡Buscá algún producto!</h2>
            </Row>
        );
    } */
    /* console.log("productos actuales:", currentProducts) */

    return (
        <Container>
            <Row>
                {currentProducts.map((product) => (
                    <Col xs={6} sm={6} md={4} lg={3} xl={3} key={product.id} className="pb-5">
                        <ProductCard product={product} />
                    </Col>
                ))}
                {console.log("productos actuales:", currentProducts)}
            </Row>
            <Stack spacing={2} className='mb-5 justify-content-center align-items-center'>
                <Pagination
                    count={Math.ceil(currentProducts.length / ProductsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </Container>
    );
}
