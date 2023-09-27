import { useEffect, useState } from "react";
import { Metrics } from "./metrics";
import useAdmin from "../../hooks/useAdmin";
import { initialMetricsData } from "./data";

export const ContentRowProduct = () => {
  const { metricsUsers, metricsProducts } = useAdmin();
  const [metricsData, setMetricsData] = useState(initialMetricsData);

  useEffect(() => {
    if (metricsUsers && metricsUsers.data) {
      setMetricsData((prevMetricsData) => ({
        ...prevMetricsData,
        users: {
          ...prevMetricsData.users,
          value: metricsUsers.data.length,
        },
      }));
    }
  }, [metricsUsers]);

  useEffect(() => {
    if (metricsUsers && metricsUsers.data) {
      const totalPurchases = metricsUsers.data.reduce(
        (total, user) => total + user.shopping,
        0
      );

      setMetricsData((prevMetricsData) => ({
        ...prevMetricsData,
        cart: {
          ...prevMetricsData.cart,
          value: totalPurchases,
        },
      }));
    }
  }, [metricsUsers]);

  useEffect(() => {
    if (metricsProducts && metricsProducts.data) {
      setMetricsData((prevMetricsData) => ({
        ...prevMetricsData,
        products: {
          ...prevMetricsData.products,
          value: metricsProducts.data.length,
        },
      }));
    }
  }, [metricsProducts]);

  return (
    <div className="row">
      <Metrics {...metricsData.products} />
      <Metrics {...metricsData.users} />
      <Metrics {...metricsData.cart} />
    </div>
  );
};
