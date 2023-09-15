import { useProducts } from "../../hooks/useProduct";

export const LastProductDB = () => {
  const { lastProduct, loading } = useProducts();

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
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                /*src={lastProduct.data?.imageUrls[0]} */
              />
            </div>
            <h2>{lastProduct.name}</h2>
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
