import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'
import { getBrandsService } from "../services/brands.service";

const BrandsContext = createContext();

const BrandsProvider = ({ children }) => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        getBrands()
    }, [])

    const getBrands = async () => {
        try {
            const brandsData = await getBrandsService()
            setBrands(brandsData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <BrandsContext.Provider value={{ brands }}>
            {children}
        </BrandsContext.Provider>
    )
}

BrandsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default { BrandsProvider, BrandsContext }