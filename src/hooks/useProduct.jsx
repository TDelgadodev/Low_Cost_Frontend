import { useContext } from "react";
import { ProductContext } from "../context/productProvider";

export function useProducts() {
    return useContext(ProductContext)
}