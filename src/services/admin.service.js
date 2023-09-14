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
    const response = await axios.post(url,{
      ...info
    },
    { headers: { "Content-Type": "application/json" } }
    )
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error);    
    throw new Error(error.response.data);
  }
}
