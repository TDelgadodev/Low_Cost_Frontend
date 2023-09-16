import { Button } from "react-bootstrap";
import useAdmin from "../../hooks/useAdmin";
import { useState } from "react";
import { Pagination } from "@mui/material";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const TableProductsDash = () => {
  const { metricsProducts } = useAdmin();
  const [currentPage, setCurrentPage] = useState(1);

  const ProductsPerPage = 6;
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;

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
              <th className={`${styles.firstColumn}`} scope="col">
                #
              </th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Categoria</th>
              <th scope="col">Marca</th>
              <th scope="col">Descuento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody className="m-2">
            {metricsProducts.data
              .slice(startIndex, endIndex)
              .map((product, index) => (
                <tr className={`${styles.rowsTable}`} key={product.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category.name}</td>
                  <td>{product.brand.name}</td>
                  <td>{product.offer ? "Sí" : "No"}</td>
                  <td className={`${styles.linksDashboardActions}`}>
                    <Button>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                    <Link to={`/dashboard/delete-product/${product.id}`}>
                      <i className="fa-solid fa-trash"></i>
                    </Link>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>

          <div className="d-flex justify-content-center">
            <Pagination
              count={Math.ceil(metricsProducts.data.length / ProductsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </table>
      </div>
    </>
  );
};
