import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCardOffer from '../ProductCardOffer';
import { useProducts } from '../../hooks/useProduct';

export default function PaginationCard() {
    const { filteredProducts } = useProducts()
    const ProductsPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

        const handlePageChange = (event, pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const startIndex = (currentPage - 1) * ProductsPerPage;
        const endIndex = startIndex + ProductsPerPage;
        const currentProducts = filteredProducts ? filteredProducts.slice(startIndex, endIndex) : [];



        if (!filteredProducts || filteredProducts.length === 0) {
            return (
                <Row className="p-5 m-5">
                    <h2 className="text-center"> No hay productos en oferta</h2>
                </Row>
            )
        }
        return (
            <Container>
                <Row>
                    {currentProducts.map((product) => (
                        <Col xs={6} sm={6} md={4} lg={3} xl={3} key={product.id} className="pb-5">
                            <ProductCardOffer product={product} />
                        </Col>
                    ))}
                </Row>
                <Stack spacing={2} className='mb-5 justify-content-center align-items-center'>
                    <Pagination
                        count={Math.ceil(filteredProducts.length / ProductsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </Container>
        );
    }