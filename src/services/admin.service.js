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
      
      // Crear un objeto FormData para enviar archivos
      const formData = new FormData();
      formData.append("title", info.title);
      formData.append("price", info.price);
      formData.append("description", info.description);
      formData.append("brandId", info.brandId);
      formData.append("categoryId", info.categoryId);
      formData.append("stock", info.stock);
      formData.append("offer", info.offer);
      formData.append("visible", info.visible);
      
      // Agregar archivos al objeto FormData
      for (let i = 0; i < info.imageFile.length; i++) {
        formData.append("imageFile", info.imageFile[i]);
      }
  
      // Realizar la solicitud POST con el objeto FormData
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Importante: Usar 'multipart/form-data' para archivos
        },
      });
  
      console.log(response);
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
  