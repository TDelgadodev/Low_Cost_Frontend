import { Button, Col, Container, Form, Row } from 'react-bootstrap';
/* import { useProducts } from '../../hooks/useProduct'; */
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types'

export default function SearchForm({ updateFilter }) {
    const [keyword, setKeyword] = useState('');
    /*     const { getProductKeyword } = useProducts(); */

    const handleSubmit = (event) => {
        event.preventDefault();
        if (keyword.trim() !== '') {
            updateFilter('keyword', keyword);
        }
    };

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <Container className='pb-5'>
            <Row className="justify-content-center align-items-center">
                <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                    <Form onSubmit={handleSubmit} className="d-flex align-items-center">
                        <Form.Control
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

SearchForm.propTypes = {
    updateFilter: PropTypes.func.isRequired
};