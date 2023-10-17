import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { LogoutOutlined } from "@mui/icons-material";
import useModal from "../../hooks/useModal";
import { getTotalProductsInCart } from "../../utils/cart.utils";
import { useCart } from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CategoriesList from "../CategoriesList";
import { useProducts } from "../../hooks/useProduct";

function Header() {
  const navigate = useNavigate();
  const { toggleModal } = useModal();
  const { cart } = useCart();
  const totalProductsInCart = getTotalProductsInCart(cart.cartItems);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/signIn");
    window.location.reload();
  };

  const { getProductKeyword } = useProducts();
  const [keyword, setKeyword] = useState("");
  /* const navigate = useNavigate(); */

  const handleSubmit = (event) => {
    event.preventDefault();
    getProductKeyword(keyword);
    navigate(`/store?keyword=${encodeURIComponent(keyword)}`);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <div
        className={`justify-content-around py-2 d-none d-md-flex ${styles.HeaderUp}`}
      >
        <div>Envíos a todo el país</div>
      </div>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`sticky-top ${styles.header}`}
        >
          <Container className={`${styles.headerContainer}`} fluid>
            <Link to="/">
              <img
                src="../logowhite.png"
                alt="logo"
                className={`${styles.logo}`}
              />
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={`${styles.menuButton}`}
            />
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
                  <Form
                    className="d-flex align-items-center pe-3"
                    onSubmit={handleSubmit}
                  >
                    <Form.Control
                      type="search"
                      placeholder="Buscar Productos"
                      className="me-2"
                      aria-label="Search"
                      value={keyword}
                      onChange={handleChange}
                    />
                    <Button type="submit">
                      <SearchIcon />
                    </Button>
                  </Form>
                  <Nav.Link href="/" className={`${styles.typo}`}>
                    <Button>Inicio</Button>
                  </Nav.Link>
                  <Nav.Link href="#ofertas" className={`${styles.typo}`}>
                    <Button>Ofertas</Button>
                  </Nav.Link>
                  <Nav.Link href="/catalogo-agosto.pdf" target="_blank" className={`${styles.typo}`}>
                    <Button>Revista</Button>
                  </Nav.Link>
                  <Nav.Link href="#contacto" className={`${styles.typo}`}>
                    <Button>Contacto</Button>
                  </Nav.Link>
                  <Nav.Link className={`${styles.typo}`}>
                    <Button
                      onClick={toggleModal}
                      className={`${styles.buttonContainer}`}
                    >
                      <span className={`${styles.shopNumber}`}>
                        {totalProductsInCart}
                      </span>
                      <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    </Button>
                  </Nav.Link>
                  {user ? (
                    <Nav.Link>
                      <Link to={`/profile/${user.id}`} className={`${styles.typo}`}>
                        <Button style={{ backgroundColor: 'orangered' }}>
                          <AccountCircleOutlinedIcon />
                        </Button>
                      </Link>
                      <Link className={`${styles.typo} px-3`}>
                        <Button onClick={handleLogout}>
                          <LogoutOutlined />
                        </Button>
                      </Link>
                    </Nav.Link>
                  ) : (
                    <Nav.Link>
                      <Link to="/signIn" className={`${styles.typo}`}>
                        <Button>
                          <AccountCircleOutlinedIcon />
                        </Button>
                      </Link>
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div
        className={`${styles.categoriesButton} ms-auto d-flex align-items-center justify-content-center`}
      >
        <CategoriesList></CategoriesList>
      </div>
    </>
  );
}
export default Header;
