import { useContext } from "react";
import { CartContext } from '../context/cartProvider'

export function useCart() {
    return useContext(CartContext)
}