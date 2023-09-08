import { useState, createContext, useEffect } from "react";
import { fetchMetricsDataProducts, fetchMetricsDataUsers } from "../services/admin.service";
import PropTypes from "prop-types";

const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  const [metricsUsers, setMetricsUsers] = useState([]);
  const [metricsProducts, setMetricsProducts] = useState([]);

  const handleAlert = (error) => {
    setAlert(error.message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const getMetricsUsers = async () => {
    try {
      const data = await fetchMetricsDataUsers();
      console.log(data);
      setMetricsUsers(data);
    } catch (error) {
      handleAlert(error);
    }
  };

  const getMetricsProducts = async () => {
    try {
      const data = await fetchMetricsDataProducts();
      console.log(data);
      setMetricsProducts(data);
    } catch (error) {
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
