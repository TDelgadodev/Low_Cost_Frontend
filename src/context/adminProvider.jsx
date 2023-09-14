import { useState, createContext, useEffect } from "react";
import { createProductService, fetchMetricsDataProducts, fetchMetricsDataUsers } from "../services/admin.service";
import PropTypes from "prop-types";

const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [metricsUsers, setMetricsUsers] = useState([]);
  const [metricsProducts, setMetricsProducts] = useState([]);
  const [createProduct, setCreateProduct] = useState(null);

  const handleAlert = (error) => {
    setAlert(error.message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const getMetricsUsers = async () => {
    try {
      const data = await fetchMetricsDataUsers();
      setMetricsUsers(data);
    } catch (error) {
      handleAlert(error);
    }
  };

  const getMetricsProducts = async () => {
    try {
      const data = await fetchMetricsDataProducts();
      setMetricsProducts(data);
    } catch (error) {
      handleAlert(error);
    }
  };

  const createProductProvider = async (info) => {
    try {
      const data = await createProductService(info);
      console.log("createProductProvider called with data:", data);
      setCreateProduct(data);
      return data;
    } catch (error) {
      console.log("createProductProvider error:", error);
      handleAlert(error);
    }
  }
  
  useEffect(() => {
    getMetricsUsers();
  }, []);
  useEffect(() => {
    getMetricsProducts();
  }, []);

  const contextValue = {
    getMetricsUsers,
    metricsUsers, 
    getMetricsProducts,
    metricsProducts,
    createProductProvider,
    createProduct,
    alert,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AdminContext, AdminProvider };
