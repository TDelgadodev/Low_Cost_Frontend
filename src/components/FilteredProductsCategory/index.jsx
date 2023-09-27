// Donde deseas mostrar los productos de la categoría seleccionada
import { useEffect } from "react";
import { useProducts } from "../../hooks/useProduct";

export const ShowProductsListByCategory = () => {
  const { filteredProductsCategory } = useProducts();

  useEffect(() => {
    if (filteredProductsCategory) {
      console.log('Productos de la categoría seleccionada:', filteredProductsCategory);
    }
  }, [filteredProductsCategory]);

  return (
    <div>
        <h2>Hello world</h2>
    </div>
  );
};
