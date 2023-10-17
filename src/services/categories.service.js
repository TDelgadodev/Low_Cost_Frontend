import axios from 'axios'

const apiUrl = import.meta.env.VITE_CATEGORY_API_URL

export const getCategoriesService = async () => {
    try {
        const url = `${apiUrl}`
        const response = await axios.get(url);
        const categories = response.data.data;
        return categories
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener las categorías")
    }
}

