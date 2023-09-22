import PropTypes from 'prop-types';

export default function ProductListItem({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>{product.stock}</td>
      <td>{product.category?.name}</td>
      <td>{product.brand?.name}</td>
      <td>{product.offer ? "Sí" : "No"}</td>
      <td>{product.visible ? "Sí" : "No"}</td>
    </tr>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
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
