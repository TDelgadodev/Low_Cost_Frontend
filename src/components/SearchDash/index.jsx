import { useState } from 'react';
import SearchForm from '../SearchForm';
import { useProducts } from '../../hooks/useProduct';
import ProductList from '../ProductList';

export default function SearchDash() {
  const { filteredKeyword, getProductKeyword } = useProducts();
  const [hasSearched, setHasSearched] = useState(false);
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const handleSearch = async (keyword) => {
    try {
      await getProductKeyword(keyword);
      setSearchedKeyword(keyword);
    } finally {
      setHasSearched(true);
    }
  };

  return (
    <div>
      <div className='pb-3'>
        <SearchForm onSearch={handleSearch} />
      </div>
      {searchedKeyword && (
        <h4 className='text-center'>
          Resultados de búsqueda para: {searchedKeyword}
        </h4>
      )}
      {filteredKeyword ? (
        <ProductList products={filteredKeyword} />
      ) : (
        hasSearched && (
          <h3 className='text-center'>
            No se encontraron productos que coincidan con la palabra clave proporcionada.
          </h3>
        )
      )}
    </div>
  );
}
