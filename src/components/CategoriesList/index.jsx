import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';
import { RingLoader } from 'react-spinners';
import styles from './CategoriesList.module.css';
import { useProducts } from '../../hooks/useProduct';

export default function CategoriesList() {
    const [expanded, setExpanded] = useState(false);
    const context = useCategories();
    const categories = context.categories;

    const { getProductByCategory} = useProducts()

    const handleCategoryClick = (categoryId) => {
        getProductByCategory(categoryId)
    }

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    if (!categories) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <RingLoader color="#00BFFF" size={80} />
            </div>
        );
    }

    return (
        <>
            <Navbar className='p-1 d-flex'>
                <Container>
                    <Navbar.Toggle onClick={toggleMenu} />
                    <Navbar.Collapse in={expanded}>
                        <Nav>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown" className={`${styles.menuButton}`}>
                                <ul className={`${styles.categoriesList}`} >
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link to={`/search`} onClick={() => handleCategoryClick(category.id)}>{category.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
