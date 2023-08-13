import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';
import OrderSelector from '../OrderSelector';

export default function PaginationSearch() {
    const { filteredKeyword, filteredProductsCategory, filteredProductsBrand } = useProducts();
    const ProductsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [orderBy, setOrderBy] = useState('')

    const handleOrderByChange = (event) => {
        setOrderBy(event.target.value);
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

        if (orderBy === 'name_asc') {
            productsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
        } else if (orderBy === 'name_desc') {
            productsToDisplay.sort((a, b) => b.name.localeCompare(a.name));
        } else if (orderBy === 'price_asc') {
            productsToDisplay.sort((a, b) => a.price - b.price);
        } else if (orderBy === 'price_desc') {
            productsToDisplay.sort((a, b) => b.price - a.price);
        }

        if (productsToDisplay.length > 0) {
            setCurrentProducts(productsToDisplay);
        }

    }, [filteredKeyword, filteredProductsCategory, filteredProductsBrand, currentPage, orderBy]);

    return (
        <>
            <OrderSelector orderBy={orderBy} handleOrderByChange={handleOrderByChange} />
            {!currentProducts || currentProducts.length === 0 ? (
                <Row className='p-5 m-5'>
                    <h2 className='text-center'>¡Buscá algún producto!</h2>
                </Row>
            ) : (
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
            )}
        </>
    );
}
