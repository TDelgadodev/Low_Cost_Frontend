import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../hooks/useProduct";

export const ShowProductsListByCategory = () => {
  const { getProductByCategory } = useProducts();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category");
  const [isLoading, setIsLoading] = useState(true);
  const [productsInCategory, setProductsInCategory] = useState(null);
  const prevCategoryIdRef = useRef(null);

  useEffect(() => {
    const fetchProductsByCategory = async (category) => {
      setIsLoading(true);
      try {
        const categoryIdNumber = parseInt(category, 10);
        if (isNaN(categoryIdNumber)) {
          setIsLoading(false);
          setProductsInCategory([]);
          return;
        }

        const products = await getProductByCategory(categoryIdNumber);
        setProductsInCategory(products);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId !== prevCategoryIdRef.current) {
      prevCategoryIdRef.current = categoryId;
      if (categoryId !== null && categoryId !== undefined) {
        fetchProductsByCategory(categoryId);
        console.log(categoryId);
      } else {
        setIsLoading(false);
        setProductsInCategory([]);
      }
    } else {
      setIsLoading(false);
    }
  }, [categoryId, getProductByCategory]);


  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Productos de la categoría seleccionada:</h2>
      <ul>
        {productsInCategory?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
