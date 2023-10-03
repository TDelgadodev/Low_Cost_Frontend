import { useState } from 'react';
import { editProductPricesService } from '../../services/admin.service';

function EditPriceDash() {
  const [startIdAbsolute, setStartIdAbsolute] = useState('');
  const [endIdAbsolute, setEndIdAbsolute] = useState('');
  const [updateValueAbsolute, setUpdateValueAbsolute] = useState('');
  const [startIdPercentage, setStartIdPercentage] = useState('');
  const [endIdPercentage, setEndIdPercentage] = useState('');
  const [percentageValue, setPercentageValue] = useState('');
  const [isPercentage, setIsPercentage] = useState(false);
  const [message, setMessage] = useState('');

  const handleEditPrices = async () => {
    try {  
      const result = await editProductPricesService(
        isPercentage ? startIdPercentage : startIdAbsolute,
        isPercentage ? endIdPercentage : endIdAbsolute,
        isPercentage ? percentageValue : updateValueAbsolute,
        isPercentage
      );
      
      console.log("Result from backend:", result);
  
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
      <h2>Edit Product Prices</h2>
      <div>
        <h3>Update by Value</h3>
        <input
          type="number"
          placeholder="Start ID"
          value={startIdAbsolute}
          onChange={(e) => setStartIdAbsolute(e.target.value)}
        />
        <input
          type="number"
          placeholder="End ID"
          value={endIdAbsolute}
          onChange={(e) => setEndIdAbsolute(e.target.value)}
        />
        <input
          type="number"
          placeholder="Update Value"
          value={updateValueAbsolute}
          onChange={(e) => setUpdateValueAbsolute(e.target.value)}
        />
        <button onClick={handleEditPrices}>Edit Prices</button>
      </div>
      <hr />
      <div>
        <h3>Update by Percentage</h3>
        <input
          type="number"
          placeholder="Start ID"
          value={startIdPercentage}
          onChange={(e) => setStartIdPercentage(e.target.value)}
        />
        <input
          type="number"
          placeholder="End ID"
          value={endIdPercentage}
          onChange={(e) => setEndIdPercentage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Percentage"
          value={percentageValue}
          onChange={(e) => setPercentageValue(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isPercentage}
            onChange={handleTogglePercentage}
          />
          Apply Percentage
        </label>
        <button onClick={handleEditPrices}>Edit Prices</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditPriceDash;
