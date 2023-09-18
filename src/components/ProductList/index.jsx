import PropTypes from "prop-types";
import ProductCard from "../ProductCard";

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
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
