import { Button, Col, Container, Row } from "react-bootstrap";
import { AttachMoney, Autorenew, DeliveryDining } from "@mui/icons-material";
import styles from "./index.module.css";
import WhatsApp from "../../components/WhatsApp";
import ShoppingCart from "../../components/CartModal";
import { useParams } from "react-router-dom";
import { useProducts } from '../../hooks/useProduct'
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { toast } from 'react-toastify'
import Carrousel from "../../components/CarrouselIMG";

export const Detail = () => {
  const { id } = useParams();
  const { getProduct } = useProducts();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const productDetails = await getProduct(id);
        setProduct(productDetails);
      } catch (error) {
        console.error("Error obteniendo el detalle de producto:", error);
      }
    };

    loadProductDetails();
  }, [id, getProduct]);

  const { addToCart } = useCart()

  function handleAddToCart(product) {
    const { id, name, price, imageUrls } = product;
    const productToAdd = { idProduct: id, name, price, imageUrls };
    addToCart(productToAdd);
    toast.success('¡Producto agregado con éxito!');
  }

  const imageUrls = product && product.imageUrls && Array.isArray(product.imageUrls) ? product.imageUrls : [];

  if (!product) {
    return <p>El producto no esta disponible.</p>;
  }

  console.log(product)

  return (
    <>
      <Container className={`${styles.containerCustomDetails}`}>
        {imageUrls && imageUrls.length > 0 ? (
          <Carrousel images={imageUrls} />
        ) : (
          <img
            className="d-block w-100 custom-carousel-item img-fluid"
            src="/nofoto.png"
            alt="No hay imágenes disponibles"
          />
        )}
        <div className="m-3">
          <h2>{product.name}</h2>
          <b>${product.price.toLocaleString('es-AR')}</b>
          <Row className={`mb-5 p-3`}>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={`d-flex align-items-center mb-4 ${styles.textItems}`}
            >
              <DeliveryDining
                className={`${styles.itemsIcon}`}
              ></DeliveryDining>
              <div>
                <p>ENTREGA INMEDIATA</p>
                <small>Recibí el producto dentro de las 48hs</small>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={`d-flex align-items-center mb-4 ${styles.textItems}`}
            >
              <Autorenew className={`${styles.itemsIcon}`}></Autorenew>
              <div>
                <p>TIEMPO DE PRUEBA</p>
                <small>Tenés 72hs para probar el producto</small>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className={`d-flex align-items-center ${styles.textItems}`}
            >
              <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
              <div>
                <p>ENVÍO GRATUITO</p>
                <small>Sin costo dentro de las zonas</small>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className={`m-3 ${styles.containerCustomButton}`}>
          <div className={`d-grid gap-2`}>
            <Button variant="primary"
              onClick={() => {
                handleAddToCart(product)
              }}
              style={{ width: '100%' }}>Agregar al Carrito</Button>
          </div>
        </div>
        <div className={`m-3 ${styles.containerCustomcharacteristics}`}>
          <p>
            Lo que tenes que saber de este producto:
          </p>
          <small>{product.description}</small>
        </div>
      </Container>
      {/* <Container>
        <h2>PRODUCTOS RELACIONADOS</h2>
      </Container> */}
      <WhatsApp></WhatsApp>
      <ShoppingCart></ShoppingCart>
    </>
  );
};
