import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const productsData = [
    { id: 1, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 2, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 3, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 4, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 5, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 6, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 7, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 8, name: 'MOTOMEL CG 150. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 9, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 10, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 11, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 12, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 13, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 14, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 15, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
    { id: 16, name: 'AUTOMEL CG 250. Cilindrada: 149,5 cc.', price: '$39.999' },
];

const ProductsPerPage = 8;

const ProductCard = ({ product }) => {
    return (
        <Card /* className="w-50" */>
            <Card.Img variant="top" src="./auto.jpg" style={{ width: '100%', margin: '0 auto' }} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <b>{product.price}</b>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%' }}>Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );
};

const PaginationCard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * ProductsPerPage;
    const endIndex = startIndex + ProductsPerPage;
    const currentProducts = productsData.slice(startIndex, endIndex);

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
                    count={Math.ceil(productsData.length / ProductsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </Container>
    );
};


export default PaginationCard;

