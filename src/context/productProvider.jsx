import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { filterProductsByOffer, getProductService, filterProductsByKeyword, filterProductsByCategory, filterProductsByBrand } from '../services/product.service'

const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [productId, setProductId] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [filteredKeyword, setFilteredKeyword] = useState(null)
    const [filteredProductsCategory, setFilteredProductsCategory] = useState(null)
    const [filteredProductsBrand, setFilteredProductsBrand] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleModalClick() {
        setModal(!modal)
    }

    function handleProductIdClick(id) {
        setProductId(id)
    }

    async function getProduct() {
        if (!productId) return

        try {
            setLoading(true)
            const productData = await getProductService(productId)
            setProducts(productData)
        } catch (error) {
            console.error(error.message)
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
        if (filteredProductsCategory !== null) {
            setFilteredKeyword(null);
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
            getProductKeyword(filteredKeyword);
        }
    }, [filteredKeyword]);

    useEffect(() => {
        getProductOffer();
    }, []);

    const contextValues = {
        products,
        filteredProducts,
        filteredKeyword,
        filteredProductsCategory,
        filteredProductsBrand,
        modal,
        loading,
        handleModalClick,
        handleProductIdClick,
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