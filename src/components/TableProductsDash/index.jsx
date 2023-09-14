import { Button } from "react-bootstrap";
import useAdmin from "../../hooks/useAdmin";

export const TableProductsDash = () => {
  const { metricsProducts } = useAdmin();
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Lista de productos</h4>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm"></ul>
      </nav>
      <hr />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Categoria</th>
              <th scope="col">Marca</th>
              <th scope="col">Descuento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="m-2">
            {metricsProducts.data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category.name}</td>
                <td>{product.brand.name}</td>
                <td>{product.offer ? "Sí" : "No"}</td>
                <td>
                  <Button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                </td>
                <td>
                  <Button variant="danger">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
