import { useState } from 'react';
import { editProductPricesService } from '../../services/admin.service';

function EditPriceDash() {
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleEditPrices = async () => {
    try {
      const result = await editProductPricesService(startId, endId, newPrice);
      setMessage(result.message); // Manejar la respuesta de la API
    } catch (error) {
      setMessage(error.message); // Manejar errores
    }
  };

  return (
    <div>
      <h2>Edit Product Prices</h2>
      <input
        type="text"
        placeholder="Start ID"
        value={startId}
        onChange={(e) => setStartId(e.target.value)}
      />
      <input
        type="text"
        placeholder="End ID"
        value={endId}
        onChange={(e) => setEndId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <button onClick={handleEditPrices}>Edit Prices</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditPriceDash;
