import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProduct';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {

    const { getProductKeyword } = useProducts();
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getProductKeyword(keyword);
    };

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <Container className='pb-3 pt-1'>
            <Row className="justify-content-center align-items-center">
                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                    <Form onSubmit={handleSubmit} className="d-flex align-items-center">
                        <Form.Control
                            style={{ borderColor: 'rgba(206, 206, 206, 0.795)' }}
                            id='keyword'
                            type="text"
                            placeholder="Buscar Productos"
                            name="keyword"
                            value={keyword}
                            onChange={handleChange}
                        />
                        <Button variant="primary" type="submit" className='mx-3'>
                            <SearchIcon />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}