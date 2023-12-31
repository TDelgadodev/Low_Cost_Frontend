import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useProducts } from '../../hooks/useProduct';
import OrderSelector from '../OrderSelector';
import { RingLoader } from 'react-spinners';
/* import styles from './PaginationSearch.module.css' */

export default function PaginationSearch() {
    const { filteredKeyword, filteredProductsCategory, filteredProductsBrand } = useProducts();
    const ProductsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [orderBy, setOrderBy] = useState('');

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleOrderByChange = (event) => {
        setOrderBy(event.target.value);
    };

    useEffect(() => {
        let productsToDisplay = [];

        if (filteredKeyword) {
            productsToDisplay = filteredKeyword;
        } else if (filteredProductsBrand) {
            productsToDisplay = filteredProductsBrand;
        } else if (filteredProductsCategory) {
            productsToDisplay = filteredProductsCategory;
        }

        // Aplicar orden a todos los productos
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
    }, [filteredKeyword, filteredProductsCategory, filteredProductsBrand, orderBy]);

    const startIndex = (currentPage - 1) * ProductsPerPage;
    const endIndex = startIndex + ProductsPerPage;

    const paginatedProducts = currentProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(currentProducts.length / ProductsPerPage);

    return (
        <>
            <OrderSelector orderBy={orderBy} handleOrderByChange={handleOrderByChange} />
            {currentProducts === null ? (
                <Row className='p-5 m-5'>
                    <RingLoader
                        type="Oval"
                        color="#007bff"
                        height={100}
                        width={100}
                    />
                </Row>
            ) : (
                <Container>
                    <Row>
                        {paginatedProducts.map((product) => (
                            <Col xs={6} sm={6} md={4} lg={3} xl={3} key={product.id} className="pb-5">
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Stack spacing={2} className='mb-5 justify-content-center align-items-center'>
                        <Pagination
                            count={totalPages}
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