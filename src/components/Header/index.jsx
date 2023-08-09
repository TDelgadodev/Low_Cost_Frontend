import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./Header.module.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LogoutOutlined } from '@mui/icons-material';
import useModal from '../../hooks/useModal';
import { getTotalProductsInCart } from '../../utils/cart.utils'
import { useCart } from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesList from '../CategoriesList';


function Header() {
    const { toogleModal } = useModal()
    const { cart } = useCart()
    const totalProductsInCart = getTotalProductsInCart(cart.cartItems);
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
    }
/*     const [keyword, setKeyword] = useState('');
    const navigate = useNavigate ();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    }; */

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };

    return (
        <>
            <div className={`justify-content-around py-2 d-none d-md-flex ${styles.HeaderUp}`}>
                {/* <div></div> */}
                <div>Envíos a todo el país</div>
                {/* <div>Venta Telefónica: 0810-345-0602</div> */}
            </div>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className={`sticky-top ${styles.header}`}>
                    <Container className={`${styles.headerContainer}`} fluid>
                        <Navbar.Brand href="/"><img src="../logowhite.png" alt="logo" className={`${styles.logo}`} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={`${styles.menuButton}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    LowCost
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className={`${styles.offcanvasBody}`}>
                                <Nav className={`justify-content-end flex-grow-1 pe-5`}>
                                    <Form className="d-flex align-items-center pe-3" onSubmit={handleSearchSubmit}>
                                        <Form.Control
                                            type="search"
                                            placeholder="Buscar Productos"
                                            className="me-2"
                                            aria-label="Search"
                                            value={keyword}
                                            onChange={(event) => setKeyword(event.target.value)}
                                        />
                                        <Button type="submit"><SearchIcon /></Button>
                                    </Form>
                                    <Nav.Link href="/" className={`${styles.typo}`}><Button>Inicio</Button></Nav.Link>
                                    <Nav.Link href="/search" className={`${styles.typo}`}><Button>Tienda</Button></Nav.Link>
                                    <Nav.Link href="#action3" className={`${styles.typo}`}><Button>Revista</Button></Nav.Link>
                                    <Nav.Link href="#action4" className={`${styles.typo}`}><Button>Contacto</Button></Nav.Link>
                                    <Nav.Link className={`${styles.typo}`}><Button onClick={toogleModal} className={`${styles.buttonContainer}`}><span className={`${styles.shopNumber}`}>{totalProductsInCart}</span><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Button></Nav.Link>
                                    {
                                        user ? 
                                        <>
                                        <Nav.Link href="/profile" className={`${styles.typo}`}><Button><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></Button></Nav.Link>   
                                        <Nav.Link className={`${styles.typo}`}>
                                            <Button onClick={handleLogout}>
                                                <LogoutOutlined></LogoutOutlined>
                                            </Button>
                                        </Nav.Link> 
                                        </>
                                        :
                                        <Nav.Link href="/login" className={`${styles.typo}`}><Button><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></Button></Nav.Link>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <div className={`${styles.categoriesButton} ms-auto d-flex align-items-center justify-content-center`}>
                <CategoriesList></CategoriesList>
            </div>
        </>
    );
}
export default Header;