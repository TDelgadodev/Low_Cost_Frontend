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

function Header() {
    const { toogleModal } = useModal()
    /* console.log(toogleModal) */
    return (
        <>
            <div className={`${styles.HeaderUp}`}>Venta Telefónica: 0810-345-0602</div>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className={`mb-3 sticky-top ${styles.header}`}>
                    <Container className={`${styles.headerContainer}`} fluid>
                        <Navbar.Brand href="/"><img src="./logowhite.png" alt="logo" className={`${styles.logo}`} /></Navbar.Brand>
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
                                    <Form className="d-flex align-items-center pe-3">
                                        <Form.Control
                                            type="search"
                                            placeholder="Buscar Productos"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button><SearchIcon></SearchIcon></Button>
                                    </Form>
                                    <Nav.Link href="/" className={`${styles.typo}`}><Button>Inicio</Button></Nav.Link>
                                    <Nav.Link href="#action2" className={`${styles.typo}`}><Button>Tienda</Button></Nav.Link>
                                    <Nav.Link href="#action3" className={`${styles.typo}`}><Button>Revista</Button></Nav.Link>
                                    <Nav.Link href="#action4" className={`${styles.typo}`}><Button>Contacto</Button></Nav.Link>
                                    <Nav.Link className={`${styles.typo}`}><Button onClick={toogleModal}><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Button></Nav.Link>
                                    <Nav.Link href="/login" className={`${styles.typo}`}><Button><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></Button></Nav.Link>
                                    <Nav.Link href="#logout" className={`${styles.typo}`}><Button><LogoutOutlined></LogoutOutlined></Button></Nav.Link>
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