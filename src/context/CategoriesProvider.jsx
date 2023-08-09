import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'
import { getCategoriesService } from "../services/categories.service";
import { RingLoader } from "react-spinners";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategories()
    }, [])

    async function getCategories() {
        try {
            setLoading(true);
            const categoriesData = await getCategoriesService();
            setCategories(categoriesData);
            setLoading(false);
        } catch (error) {
            console.error(error.message)
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
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    )
}

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CategoriesProvider, CategoriesContext };