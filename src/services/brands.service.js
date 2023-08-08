import axios from 'axios'

const apiUrl = import.meta.env.VITE_BRAND_API_URL

export const getBrandsService = async () => {
    try {
        const url = `${apiUrl}`
        const { data } = await axios(url)
        return data.products || []
    } catch (error) {
        console.log(error)
        throw new Error("Hubo un error al obtener las categorías")
    }
}