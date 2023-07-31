import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: []
}

export function cartReducer(state, { type, payload = {} }) {
    const { idProduct } = payload

    let productInCart = state.cartItems.find((item) => item.idProduct === idProduct)
    switch (type) {
        case actionTypes.ADD_TO_CART:
            if (productInCart) {
                let cartItemUpdated = state.cartItems.map(item => {
                    if (item.idProduct === idProduct) {
                        return { ...item, ...{ quantity: ++item.quantity } }
                    }
                    return item
                })
                return {
                    ...state, ...{
                        cartItems: cartItemUpdated
                    }
                }
            } else {
                payload.quantity = 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        case actionTypes.REMOVE_ONE_FROM_CART:
            if (productInCart.quantity > 1) {
                let cartItemUpdated = state.cartItems.map(item => {
                    if (item.idProduct === idProduct) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
                console.log('remove one', cartItemUpdated);
                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            } else {
                let cartItemUpdated = state.cartItems.filter(item => item.idProduct !== idProduct)

                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if (productInCart) {
                let cartItemUpdated = state.cartItems.filter(item => item.idProduct !== idProduct)
                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            }
            return state
        case actionTypes.CLEAR_CART:
            /* localStorage.removeItem("cart") */
            /* sessionStorage.clear() */
            return {
                ...state,
                cartItems: []
            }
    }
}