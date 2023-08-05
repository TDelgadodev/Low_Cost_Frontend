import axios from 'axios'

const apiProductIdUrl = import.meta.env.VITE_PRODUCT_API_URL
const apiProductOfferUrl = import.meta.env.VITE_PRODUCT_OFFER_API_URL
const apiProductKeywordUrl = import.meta.env.VITE_PRODUCT_KEYWORD_API_URL

const getProductService = async (productId) => {
    try {
        const url = `${apiProductIdUrl}${productId}`
        /* console.log("Product Service URL:", url); */
        const { data } = await axios.get(url)
        /* console.log("Product Service Data:", data); */
        return data.products[0]
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un error al obtener el producto')
    }
}

const filterProductsByOffer = async () => {
    try {
        const url = `${apiProductOfferUrl}`

        const response = await axios.get(url);
        const products = response.data.data;

        return products
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un error al obtener los productos en oferta')
    }
}

const filterProductsByKeyword = async (keyword) => {
    try {
        const url = `${apiProductKeywordUrl}=${keyword}`
        /* console.log('URL for keyword:', url); */
        const response = await axios.get(url)
        /* console.log('Response for keyword:', response.data); */
        const products = response.data.data
        /* console.log('Products Keyword Data:', products); */
        return products
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un error al obtener los productos en por keyword')
    }
}

export { getProductService, filterProductsByOffer, filterProductsByKeyword }