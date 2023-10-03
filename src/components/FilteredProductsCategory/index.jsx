import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProduct";
import { useCategories } from "../../hooks/useCategories";
import { useBrands } from "../../hooks/useBrands";
import { Link, useParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";
import { Button } from "react-bootstrap";
import styles from './FilteredProductsCategory.module.css'

export const ShowProductsListByCategory = () => {
  const { filteredProductsCategory } = useProducts();
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { brands } = useBrands()
  const { categories } = useCategories();
  const { category } = useParams();

  useEffect(() => {

    let productsToDisplay = [];

    if (filteredProductsCategory) {
      productsToDisplay = filteredProductsCategory
    }

    if (productsToDisplay.length > 0) {
      setCurrentProducts(productsToDisplay);
    }
  }, [filteredProductsCategory]);

  const ProductsPerPage = 12;
  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;

  function getCategoryName(categoryId) {
    const foundCategory = categories.find((cat) => cat.id === parseInt(categoryId));
    return foundCategory ? foundCategory.name : "Categoría no encontrada";
  }

  function getProductNameWithCategoryAndBrand(product) {
    const category = categories.find((cat) => cat.id === product.categoryId);
    const brand = brands.find((brand) => brand.id === product.brandId);

    if (category && brand) {
      return {
        name: product.name,
        categoryName: category.name,
        brandName: brand.name,
      };
    } else {
      return {
        name: product.name,
        categoryName: "N/A",
        brandName: "N/A",
      };
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Productos de la categoría: {getCategoryName(category)}</h4>
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
              <th scope="col">Precio USD</th>
              <th scope="col">Categoria</th>
              <th scope="col">Marca</th>
              <th scope="col">Descuento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody className="m-2">
            {currentProducts
              .slice(startIndex, endIndex)
              .map((product, index) => (
                <tr className={`${styles.rowsTable}`} key={product.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>${product.priceUSD ? product.priceUSD : 'N/A'}</td>
                  <td>{getProductNameWithCategoryAndBrand(product).categoryName}</td>
                  <td>{getProductNameWithCategoryAndBrand(product).brandName}</td>
                  <td>{product.offer ? "Sí" : "No"}</td>
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
              ))}
          </tbody>
        </table>
        <Stack spacing={2} className='mt-5 justify-content-center align-items-center'>
          <Pagination
            count={Math.ceil(currentProducts.length / ProductsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};
