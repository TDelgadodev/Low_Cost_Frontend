import { toast } from "react-toastify";
import { updatePricesByCategoryService } from "../../services/admin.service";
import { useState, useEffect } from "react";
import { filterProductsByCategory } from "../../services/product.service";
import { Link } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";
import { Button } from "react-bootstrap";
import styles from "./index.module.css";



function EditCategoryPrices() {
  const [categoryId, setCategoryId] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [isPercentage, setIsPercentage] = useState(false);
  const [message, setMessage] = useState("");
  const [editedProducts, setEditedProducts] = useState([]);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ProductsPerPage = 12;



  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;


  const handleEditPrices = async () => {
    try {
      const result = await updatePricesByCategoryService(
        categoryId,
        updateValue,
        isPercentage
      );
      toast.success(
        `Productos con la categoría: ${categoryId} editados con éxito`
      );

      const response = await filterProductsByCategory(categoryId);

      if (response) {
        setEditedProducts(response);
        setIsRequestSuccessful(true);
      }
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message);
      toast.error("Error al editar precios", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleTogglePercentage = () => {
    setIsPercentage(!isPercentage);
  };

  useEffect(() => {
    async function fetchInitialProducts() {
      try {
        const response = await filterProductsByCategory(categoryId);

        if (response) {
          setEditedProducts(response);
        }
      } catch (error) {
        console.error('Error al obtener productos por categoría', error);
      }
    }

    if (categoryId) {
      fetchInitialProducts();
    }
  }, [categoryId]);
  return (
    <div>
      <h3 className='pb-3'>Editar Precios por Categoría</h3>
      <p>Seleccione el número correspondiente a la categoría que desea para determinar un valor porcentual mayor y, así, incrementar únicamente los productos de dicha categoría. Luego de colocar el número de categoría se desplegará una lista ordenada con los productos pertinentes a esa categoría.</p>
      <p>Atención: Antes de editar marque la casilla Aplicar Porcentaje. No es necesario colocar el simbolo %</p>
      <div className='pb-5'>
        <label>ID Categoría:</label>
        <input
          type="number"
          className='mx-3'
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <label>Nuevo Valor:</label>
        <input
          type="number"
          className='mx-3'
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            className='mx-3'
            checked={isPercentage}
            onChange={handleTogglePercentage}
          />
          Aplicar Porcentaje
        </label>
        <button className='mx-3' style={{ color: 'white', backgroundColor: '#007BFF' }} onClick={handleEditPrices}>Edit Prices</button>
      </div>
      {message && <p>{message}</p>}
      {editedProducts.length > 0 && (
        <div>
          <h2>Productos de la categoría {categoryId}</h2>
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
                  <th scope="col">Categoría</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Descuento</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>

              <tbody className="m-2">
                {editedProducts
                  .slice(startIndex, endIndex)
                  .map((product, index) => (
                    <tr className={`${styles.rowsTable}`} key={product.id}>
                      <td>{startIndex + index + 1}</td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>${product.priceUSD ? product.priceUSD : 'N/A'}</td>
                      <td>{product.category ? product.category.name : 'N/A'}</td>
                      <td>{product.brand ? product.brand.name : 'N/A'}</td>
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
                count={Math.ceil(editedProducts.length / ProductsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditCategoryPrices;
