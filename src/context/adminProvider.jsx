import { useState, createContext, useEffect } from "react";
import {
  createProductService,
  deleteProductService,
  fetchMetricsDataProducts,
  fetchMetricsDataUsers,
  getProductDetails,
  updateProductService,
} from "../services/admin.service";
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

  const createProductProvider = async (formData) => {
    try {
      const data = await createProductService(formData);
      setCreateProduct(data);
      return data;
    } catch (error) {
      console.log("createProductProvider error:", error);
      handleAlert(error);
    }
  };

  const deleteProductProvider = async (id) => {
    try {
      const data = await deleteProductService(id);
      return data;
    } catch (error) {
      console.log("deleteProductProvider error:", error);
      handleAlert(error);
    }
  };

  const getProductDetailsProvider = async (id) => {
    try {
      const data = await getProductDetails(id);
      return data;
    } catch (error) {
      console.log("getProductDetailsProvider error:", error);
      handleAlert(error);
    }
  };
  const updateProductProvider = async (formData,id) => {
    try {
      const updatedProduct = await updateProductService(formData,id);
      return updatedProduct;
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      handleAlert(error);
    }
  };

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
    getProductDetailsProvider,
    createProduct,
    updateProductProvider,
    deleteProductProvider,
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
