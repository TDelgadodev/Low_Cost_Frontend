import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { filterProductsByOffer, getProductService, filterProductsByKeyword, filterProductsByCategory, filterProductsByBrand, getLastProductService } from '../services/product.service'

const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
    const [idProduct, setProductId] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [lastProduct, setLastProduct] = useState(null);
    const [filteredKeyword, setFilteredKeyword] = useState(null)
    const [filteredProductsCategory, setFilteredProductsCategory] = useState(null)
    const [filteredProductsBrand, setFilteredProductsBrand] = useState(null)
    const [loading, setLoading] = useState(false)

    async function getProduct(idProduct) {
        try {
            const productData = await getProductService(idProduct);
            productData.imageUrls = JSON.parse(productData.imageUrls);
            return productData
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function getLastProduct (){
        try {
            setLoading(true)
            const lastProduct = await getLastProductService();
            console.log(lastProduct);
            setLastProduct(lastProduct);
        } catch (error) {
            console.error('Hubo un error al obtener el último producto:', error.message);
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function getProductOffer() {
        try {
            setLoading(true)
            const productOfferData = await filterProductsByOffer()
            productOfferData.forEach((product) => {
                product.imageUrls = JSON.parse(product.imageUrls);
            });
            setFilteredProducts(productOfferData)
            /* console.log("Product Offer Data:", productOfferData); */
        } catch (error) {
            console.error("Error fetching product offer data:", error.message);
        } finally {
            setLoading(false)
        }
    }

    async function getProductKeyword(keyword) {
        try {
            setLoading(true)
            const productKeywordData = await filterProductsByKeyword(keyword)
            productKeywordData.forEach((product) => {
                product.imageUrls = JSON.parse(product.imageUrls);
            })
            setFilteredKeyword(productKeywordData)
            console.log("Product Keyword Data:", productKeywordData);
        } catch (error) {
            console.error("Error fetching product keyword data:", error.message);
        } finally {
            setLoading(false)
        }
    }

    async function getProductByCategory(category) {
        try {
            setLoading(true);
            const productByCategoryData = await filterProductsByCategory(category);

            productByCategoryData.forEach((product) => {
                product.imageUrls = JSON.parse(product.imageUrls);
            });

            setFilteredProductsCategory(productByCategoryData);
        } catch (error) {
            console.error("Error fetching product by category data:", error.message);
        } finally {
            setLoading(false);
        }
    }

    async function getProductByBrand(brand) {
        try {
            setLoading(true)
            const productByBrandData = await filterProductsByBrand(brand)

            productByBrandData.forEach((product) => {
                product.imageUrls = JSON.parse(product.imageUrls);
            })
            setFilteredProductsBrand(productByBrandData)
        } catch (error) {
            console.error("Error fetching product by brand data:", error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (idProduct !== null) {
            setProductId(null);
            getProduct(idProduct)
        }
    }, [idProduct]);

    useEffect(() => {
        getLastProduct();
      }, []);

    useEffect(() => {
        if (filteredProductsCategory !== null) {
            setFilteredKeyword(null);
            setFilteredProductsBrand(null);
            getProductByCategory(filteredProductsCategory);
        }
    }, [filteredProductsCategory]);

    useEffect(() => {
        if (filteredProductsBrand !== null) {
            getProductByBrand(filteredProductsBrand);
        }
    }, [filteredProductsBrand]);

    useEffect(() => {
        if (filteredKeyword !== null) {
            setFilteredProductsBrand(null);
            setFilteredProductsCategory(null);
            getProductKeyword(filteredKeyword);
        }
    }, [filteredKeyword]);

    useEffect(() => {
        getProductOffer();
    }, []);

    const contextValues = {
        idProduct,
        lastProduct, 
        getLastProduct,
        filteredProducts,
        filteredKeyword,
        filteredProductsCategory,
        filteredProductsBrand,
        loading,
        getProduct,
        getProductOffer,
        getProductKeyword,
        getProductByCategory,
        getProductByBrand
    }

    return (
        <ProductContext.Provider value={contextValues}>{children}</ProductContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { ProductContext, ProductsProvider }