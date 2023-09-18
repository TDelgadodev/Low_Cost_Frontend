import { useState } from 'react';
import SearchForm from '../SearchForm';
import { useProducts } from '../../hooks/useProduct';
import ProductList from '../ProductList';

export default function SearchDash() {
  const { filteredKeyword, getProductKeyword } = useProducts();
  const [hasSearched, setHasSearched] = useState(false); 

  const handleSearch = async (keyword) => {
    try {
      await getProductKeyword(keyword);
    } finally {
      setHasSearched(true);
      console.log(hasSearched);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {filteredKeyword ? (
        <ProductList products={filteredKeyword} />
      ) : (
        hasSearched && <h3 className='text-center'>No se encontraron productos que coincidan con la palabra clave proporcionada.</h3>
      )}
    </div>
  );
}
