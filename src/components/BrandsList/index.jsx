import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useBrands } from '../../hooks/useBrands';
import { RingLoader } from 'react-spinners';
import MyCarousel from '../Carousel';
import styles from './BrandsList.module.css';

export default function BrandsList() {
    const [expanded, setExpanded] = useState(false);
    const context = useBrands();
    const brands = context.brands;

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    if (!brands) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <RingLoader color="#00BFFF" size={80} />
            </div>
        );
    }

    return (
        <>
            <Navbar expand="md" className='p-1 d-none d-md-flex'>
                <Container>
                    <Navbar.Toggle onClick={toggleMenu} />
                    <Navbar.Collapse in={expanded}>
                        <Nav>
                            <NavDropdown title="Marcas" id="basic-nav-dropdown" className={`${styles.menuButton}`}>
                                <ul className={`${styles.categoriesList}`} >
                                    {brands.map((brand) => (
                                        <li key={brand.id}>
                                            <Link to={`/search/${brand.id}`}>{brand.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <MyCarousel brands={brands} />
        </>
    );
}
