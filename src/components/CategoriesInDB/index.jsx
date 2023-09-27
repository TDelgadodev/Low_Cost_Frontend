import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProduct";
import { Link } from "react-router-dom";


export const CategoriesDB = () => {
  const { categories } = useCategories();
  const { getProductByCategory } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);
  

const handleCategoryClick = (category) => {
  console.log(category);
  setSelectedCategory(category);
  getProductByCategory(category);
};


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.id}
                  className="col-lg-6 mb-4"
                  onClick={() => handleCategoryClick(category.name)} 
                >
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{category.name}</div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No categories available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

