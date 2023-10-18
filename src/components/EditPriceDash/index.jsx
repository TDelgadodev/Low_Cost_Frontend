import { useState } from 'react';
import { editProductPricesService } from '../../services/admin.service';
/* import { Divider } from '@mui/material'; */

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
      <h3 className='pb-5'>Editar Precios por Mayor</h3>
      <div className='pb-3'>
        <h4>Establecer valores fijos</h4>
        <p>Seleccione de su lista de productos un ID inicial y un ID final para determinar un valor fijo a los productos seleccionados.</p>
        <input
          type="number"
          placeholder="Start ID"
          value={startIdAbsolute}
          onChange={(e) => setStartIdAbsolute(e.target.value)}
        />
        <input
          type="number"
          className='mx-3'
          placeholder="End ID"
          value={endIdAbsolute}
          onChange={(e) => setEndIdAbsolute(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor fijo"
          value={updateValueAbsolute}
          onChange={(e) => setUpdateValueAbsolute(e.target.value)}
        />
        <button className='mx-3' style={{ color: 'white', backgroundColor: '#007BFF' }} onClick={handleEditPrices}>Editar</button>
      </div>
      <hr />
      <div className='pt-3'>
        <h4>Establecer valores por porcentaje</h4>
        <p>Seleccione de su lista de productos un ID inicial y un ID final para determinar un valor porcentual para aumentar los productos seleccionados.</p>
        <p>Atención: Antes de editar marque la casilla Aplicar Porcentaje. No es necesario colocar el simbolo %</p>
        <input
          type="number"
          placeholder="Start ID"
          value={startIdPercentage}
          onChange={(e) => setStartIdPercentage(e.target.value)}
        />
        <input
          type="number"
          className='mx-3'
          placeholder="End ID"
          value={endIdPercentage}
          onChange={(e) => setEndIdPercentage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Porcentaje"
          value={percentageValue}
          onChange={(e) => setPercentageValue(e.target.value)}
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
        <button className='mx-3' style={{ color: 'white', backgroundColor: '#007BFF' }} onClick={handleEditPrices}>Editar</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EditPriceDash;
