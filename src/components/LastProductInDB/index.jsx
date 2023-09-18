import { useProducts } from "../../hooks/useProduct";
import { useEffect, useState } from "react"; // Añade esta línea si aún no está importado

export const LastProductDB = () => {
  const { lastProduct, loading } = useProducts();
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (lastProduct && lastProduct.imageUrls) {
      try {
        const imageUrlsArray = JSON.parse(lastProduct.imageUrls);
        setImageUrls(imageUrlsArray);
      } catch (error) {
        console.error("Error parsing imageUrls:", error);
      }
    }
  }, [lastProduct]);

  if (lastProduct) {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last product in Data Base
            </h5>
          </div>
          <div className="card-body">
          <h2>{lastProduct.name}</h2>
            <div className="text-center">
              {imageUrls.length > 0 ? (
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "20rem" }}
                  src={imageUrls[0]} 
                  alt="Last Product"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <p>{lastProduct.description}</p>
            <p>{lastProduct.price}</p>
            <p>Stock: {lastProduct.stock}</p>
            <p>OFerta: {lastProduct.offer ? "Sí" : "No"}</p>
          </div>
        </div>
      </div>
    );
  }

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
