import { Pagination, Stack } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';
import { useState } from 'react';

export default function PaginationRelated(/* { currentCategory } */) {
    const { filteredProducts } = useProducts();
    const ProductsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ProductsPerPage;
    const endIndex = startIndex + ProductsPerPage;
    const currentProducts = filteredProducts ? filteredProducts.slice(startIndex, endIndex) : [];

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                    count={Math.ceil(currentProducts.length / ProductsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </Container>
    );
}