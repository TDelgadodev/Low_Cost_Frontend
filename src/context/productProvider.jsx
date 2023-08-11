import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { filterProductsByOffer, getProductService, filterProductsByKeyword, filterProductsByCategory } from '../services/product.service'

const ProductContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [productId, setProductId] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [filteredKeyword, setFilteredKeyword] = useState(null)
    const [filteredProductsCategory, setFilteredProductsCategory] = useState(null)
    const [currentFilter, setCurrentFilter] = useState(null)
    const [loading, setLoading] = useState(false)

    const updateFilter = (filterType, filterValue) => {
        setCurrentFilter({ type: filterType, value: filterValue });
    };

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

    async function fetchFilteredData() {
        setLoading(true);

        try {
            if (currentFilter) {
                if (currentFilter.type === 'keyword') {
                    const productKeywordData = await filterProductsByKeyword(currentFilter.value);
                    setFilteredKeyword(productKeywordData);
                } else if (currentFilter.type === 'category') {
                    const productByCategoryData = await filterProductsByCategory(currentFilter.value);
                    setFilteredProductsCategory(productByCategoryData);
                }
            } else {
                const productOfferData = await filterProductsByOffer();
                setFilteredProducts(productOfferData);
            }
        } catch (error) {
            console.error("Error fetching product data:", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFilteredData();
        console.log("filtrados:", fetchFilteredData)
    }, [currentFilter, productId]);

    const contextValues = {
        products,
        filteredProducts,
        filteredKeyword,
        filteredProductsCategory,
        modal,
        loading,
        currentFilter,
        updateFilter,
        handleModalClick,
        handleProductIdClick,
        getProduct
    }

    return (
        <ProductContext.Provider value={contextValues}>{children}</ProductContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { ProductContext, ProductsProvider }
