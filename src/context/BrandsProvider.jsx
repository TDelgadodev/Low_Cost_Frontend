import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'
import { getBrandsService } from "../services/brands.service";
import { RingLoader } from "react-spinners";

const BrandsContext = createContext();

const BrandsProvider = ({ children }) => {
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBrands()
    }, [])

    async function getBrands() {
        try {
            setLoading(true)
            const brandsData = await getBrandsService()
            /* console.log('datos de marca', brandsData) */
            setBrands(brandsData)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <RingLoader color="#00BFFF" size={80} />
            </div>
        );
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

export { BrandsProvider, BrandsContext };