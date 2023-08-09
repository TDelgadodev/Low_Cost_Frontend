import { useContext } from "react";
import CategoriesContext from '../context/CategoriesProvider'

export function useCategories() {
    return useContext(CategoriesContext)
}