import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';

export default function PaginationSearch() {
    const { filteredKeyword, filteredProductsCategory, getProductByCategory } = useProducts();
    const ProductsPerPage = 12;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, pageNumber) => {
        /* console.log("Page changed:", pageNumber); */
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        if (filteredProductsCategory) {
            getProductByCategory(filteredProductsCategory)
        }
    }, [filteredProductsCategory])

    const startIndex = (currentPage - 1) * ProductsPerPage;
    const endIndex = startIndex + ProductsPerPage;
    const currentProducts = filteredKeyword ? filteredKeyword.slice(startIndex, endIndex) : [];

    /* console.log("Current products:", currentProducts); */

    if (!filteredKeyword || filteredKeyword.length === 0) {
        return (
            <Row className="p-5 m-5">
                <h2 className="text-center">¡Buscá algún producto!</h2>
            </Row>
        );
    }
    return (
        <Container>
            <Row>
                {currentProducts.map((product) => (
                    <Col xs={6} sm={6} md={4} lg={3} xl={3} key={product.id} className="pb-5">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
            <Stack spacing={2} className='mb-5 justify-content-center align-items-center'>
                <Pagination
                    count={Math.ceil(filteredKeyword.length / ProductsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </Container>
    );
}