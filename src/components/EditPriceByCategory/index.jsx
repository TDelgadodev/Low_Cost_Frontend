import { updatePricesByCategoryService } from "../../services/admin.service"
import  { useState } from 'react';

function EditCategoryPrices() {
  const [categoryId, setCategoryId] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [isPercentage, setIsPercentage] = useState(false);
  const [message, setMessage] = useState('');

  const handleEditPrices = async () => {
    try {
      const result = await updatePricesByCategoryService(categoryId, updateValue, isPercentage);
      
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleTogglePercentage = () => {
    setIsPercentage(!isPercentage);
  };

  return (
    <div>
      <h2>Edit Category Prices</h2>
      <div>
        <label>Category ID:</label>
        <input
          type="number"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </div>
      <div>
        <label>Update Value:</label>
        <input
          type="number"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPercentage}
            onChange={handleTogglePercentage}
          />
          Apply Percentage
        </label>
      </div>
      <button onClick={handleEditPrices}>Edit Prices</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditCategoryPrices;
