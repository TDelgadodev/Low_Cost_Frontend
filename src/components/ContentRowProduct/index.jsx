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
