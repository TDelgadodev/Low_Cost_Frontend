import axios from 'axios'

const apiProductIdUrl = import.meta.env.VITE_PRODUCT_API_URL
const apiProductOfferUrl = import.meta.env.VITE_PRODUCT_OFFER_API_URL
const apiProductKeywordUrl = import.meta.env.VITE_PRODUCT_KEYWORD_API_URL
const apiProductByCategoryUrl = import.meta.env.VITE_PRODUCT_BY_CATEGORY_API_URL
const apiProductByBrandUrl = import.meta.env.VITE_PRODUCT_BY_BRAND_API_URL

const getProductService = async (productId) => {
    try {
        const url = `${apiProductIdUrl}${productId}`
        const response = await axios.get(url);
        const product = response.data.data;
        return product
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un error al obtener el producto')
    }
}

const getLastProductService = async () => {
    try {
        const url = `${apiProductIdUrl}getLastProduct`;
        const response = await axios.get(url);
        //console.log(response);
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
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
        const response = await axios.get(url)
        const products = response.data.data
        return products
    } catch (error) {
        console.error(error)
        throw new Error('Hubo un error al obtener los productos por keyword')
    }
}

const filterProductsByCategory = async (category) => {
    try {
        const url = `${apiProductByCategoryUrl}${category}`
        const response = await axios.get(url)
        const products = response.data.data
        return products
    } catch (error) {
        throw new Error('Hubo un error al obtener los productos por categoria')
    }
}

const filterProductsByBrand = async (brand) => {
    try {
        const url = `${apiProductByBrandUrl}${brand}`
        const response = await axios.get(url)
        const products = response.data.data
        return products
    } catch (error) {
        throw new Error('Hubo un error al obtener los productos por marca')
    }
}

export { getProductService, getLastProductService, filterProductsByOffer, filterProductsByKeyword, filterProductsByCategory, filterProductsByBrand }