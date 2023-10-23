import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function ProductListItem({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>${product.price.toLocaleString('es-AR')/* .toFixed(2) */}</td>
      <td>{product.priceUSD ? product.priceUSD : "N/A"}</td>
      <td>{product.stock}</td>
      <td>{product.category?.name}</td>
      <td>{product.brand?.name}</td>
      <td>{product.offer ? "Sí" : "No"}</td>
      <td>{product.visible ? "Sí" : "No"}</td>
      <td className={`${styles.linksDashboardActions}`}>
        <Button>
          <Link to={`/dashboard/products/edit/${product.id}`}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </Button>
        <Button variant="danger">
          <Link to={`/dashboard/delete-product/${product.id}`}>
            <i className="fa-solid fa-trash"></i>
          </Link>
        </Button>
      </td>
    </tr>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceUSD: PropTypes.number,
    stock: PropTypes.number.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    offer: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
  }).isRequired,
};
