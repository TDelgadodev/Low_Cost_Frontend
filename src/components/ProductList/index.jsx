import PropTypes from 'prop-types';
import ProductListItem from '../ProductListItem';

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div>
        <h2>Resultados de la búsqueda:</h2>
        <p>No se encontraron productos que coincidan con la palabra clave proporcionada.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Resultados de la búsqueda:</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Marca</th>
            <th>Oferta</th>
            <th>Visible</th> 
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  })).isRequired,
};
