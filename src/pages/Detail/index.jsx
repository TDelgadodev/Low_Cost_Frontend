import { Button, Col, Container, Row } from "react-bootstrap";
import { AttachMoney, Autorenew, CreditScoreOutlined, DeliveryDining } from "@mui/icons-material";
import styles from "./index.module.css";
import WhatsApp from "../../components/WhatsApp";
import ShoppingCart from "../../components/CartModal";
import { useParams } from "react-router-dom";
import { useProducts } from '../../hooks/useProduct'
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { toast } from 'react-toastify'
import Carrousel from "../../components/CarrouselIMG";
import PaginationRelated from "../../components/PaginationRelated";

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

  /* const currentCategory = product && product.categoryId ? product.categoryId : null; */

  function handleAddToCart(product) {
    const { id, name, price, imageUrls } = product;
    const productToAdd = { idProduct: id, name, price, imageUrls };
    addToCart(productToAdd);
    toast.success('¡Producto agregado con éxito!');
  }

  const imageUrls = product && product.imageUrls && Array.isArray(product.imageUrls) ? product.imageUrls : ['/nofoto.png'];

  if (!product) {
    return <p>El producto no esta disponible.</p>;
  }
  /* console.log("producto:", product) */
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
          <small className={`${styles.categoryName}`}>Categoría - {product.category.name}</small>
          <hr className="my-3" />
          <h2 className={`${styles.productName} pt-1`}>{product.name}</h2>
          <p className={`${styles.productPrice}`}>${product.price.toLocaleString('es-AR')}</p>
          <small className={`${styles.productStock}`}>{product.stock} Unidades Disponibles</small>
          <hr className="my-4" />
          <a href="#" className={`${styles.productPay}`}><CreditScoreOutlined /> Ver todos los medios de pago</a>
          <hr className="my-4" />
          <a href="#" className={`${styles.productPay}`}><DeliveryDining /> Calcular costo de envío</a>
          <hr className="my-4" />
          <Button variant="primary" onClick={() => { handleAddToCart(product) }}
            style={{ width: '100%' }}>Agregar al Carrito</Button>
        </div>
      </Container>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
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
            md={3}
            lg={3}
            xl={3}
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
            md={3}
            lg={3}
            xl={3}
            className={`d-flex align-items-center ${styles.textItems}`}
          >
            <AttachMoney className={`${styles.itemsIcon}`}></AttachMoney>
            <div>
              <p>ENVÍO GRATUITO</p>
              <small>Sin costo dentro de las zonas</small>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className={`m-3 ${styles.containerCustomcharacteristics}`}>
          <h4 className="my-5">
            DESCRIPCIÓN
          </h4>
          <p>{product.description}</p>
        </div>
        <hr className="my-5" />
      </Container>
      <Container>
        <h3 className={`${styles.subtitulo} pb-5`}>¡OFERTAS IMPERDIBLES!</h3>
        <PaginationRelated /* currentCategory={currentCategory} */ />
      </Container>
      <WhatsApp></WhatsApp>
      <ShoppingCart></ShoppingCart>
    </>
  );
};
