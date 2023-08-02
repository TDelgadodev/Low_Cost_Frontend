import { createContext, useEffect, useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import { actionTypes } from '../actions/cart.actions'
import { cartInitialState, cartReducer } from '../reducer/cart.reducer'
import { getTotalPricesItems } from '../utils/cart.utils'

const CartContext = createContext()

function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    const [orderTotal, setOrderTotal] = useState(0)

    useEffect(() => {
        if (state.cartItems.length > 0) {
            let total = getTotalPricesItems(state.cartItems).reduce((a, b) => a + b)
            setOrderTotal(total)
        }
    }, [state])

    function addToCart(product) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
    }

    function removeOneFromCart(idProduct) {
        dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: { idProduct } })
    }

    function removeAllFromCart(idProduct) {
        dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: { idProduct } })
    }

    function clearCart() {
        dispatch({ type: actionTypes.CLEAR_CART })
        setOrderTotal(0)
    }

    function sendOrder() {
        alert(JSON.stringify(state))
    }


    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder,
        orderTotal
    }

    return (
        <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
    )

}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartContext, CartProvider }