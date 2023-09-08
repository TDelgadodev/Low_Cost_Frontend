import { useProducts } from '../../hooks/useProduct';

export const LastProductDB = () => {
  const { lastProduct, loading } = useProducts(); 
  console.log(lastProduct);

  if (loading) {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last product in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (lastProduct) { // Verifica si hay un último producto válido
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last product in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '40rem' }}
                src={lastProduct.imageUrls[0]} // Assuming the first image URL
                alt={lastProduct.name}
              />
            </div>
            <p>{lastProduct.description}</p>
            {/* Agrega el enlace si es necesario */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last product in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <p>No products available in the database.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
