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

function Header() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className={`mb-3 ${styles.header}`}>
                    <Container fluid>
                        <Navbar.Brand href="#"><img src="./public/logowhite.png" alt="logo" className={`${styles.logo}`} /></Navbar.Brand>
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
                                    <Form className="d-flex pe-3">
                                        <Form.Control
                                            type="search"
                                            placeholder="Buscar Productos"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button><SearchIcon></SearchIcon></Button>
                                    </Form>
                                    <Nav.Link href="#action1" className={`${styles.typo}`}>INICIO</Nav.Link>
                                    <Nav.Link href="#action2" className={`${styles.typo}`}>TIENDA</Nav.Link>
                                    <Nav.Link href="#action3" className={`${styles.typo}`}>REVISTA</Nav.Link>
                                    <Nav.Link href="#action4" className={`${styles.typo}`}>CONTACTO</Nav.Link>
                                    <Nav.Link href="#action5" className={`${styles.typo}`}><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Nav.Link>
                                    <Nav.Link href="#action6" className={`${styles.typo}`}><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;