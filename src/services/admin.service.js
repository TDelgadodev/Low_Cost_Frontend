import axios from "axios";

const apiUrl = import.meta.env.VITE_ADMIN_API_URL; 

export const fetchMetricsDataUsers = async () => {
    try {
      const url = `${apiUrl}users`;
      const response = await axios.get(url)
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
  

  export const fetchMetricsDataProducts = async () => {
    try {
      const url = `${apiUrl}products`;
      const response = await axios.get(url)
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };


  export const createProductService = async (info) => {
    try {
      const url = `${apiUrl}create`;
  
      const formData = new FormData();
      const { title, price, priceUSD,description, brandId, categoryId, stock, offer, visible, imageFile } = info;
  
      formData.append("title", title);
      formData.append("price", price);
      formData.append("priceUSD", priceUSD);
      formData.append("description", description);
      formData.append("brandId", brandId);
      formData.append("categoryId", categoryId);
      formData.append("stock", stock);
      formData.append("offer", offer);
      formData.append("visible", visible);
  
      for (let i = 0; i < imageFile.length; i++) {
        formData.append("imageFiles", imageFile[i]);
      }
  
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
  
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data);
    }
  };
  
  
  export const deleteProductService = async (id) => {
    try {
      const url = `${apiUrl}${id}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
  
  export const getProductDetails = async (id) => {
    try {
      const url = `${apiUrl}edit/${id}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  export const updateProductService = async (formData,id) => {
    try {
      const url = `${apiUrl}edit/${id}`;
  
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  export const editProductPricesService = async (startId, endId, updateValue, isPercentage) => {
    try {
      const url = `${apiUrl}edit/product-prices`;
      const data = {
        startId,
        endId,
        updateValue,
        isPercentage,
      };
      const response = await axios.put(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
  
  
  