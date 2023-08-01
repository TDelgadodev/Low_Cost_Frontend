import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: []
}

export function cartReducer(state, { type, payload = {} }) {
    const { idProduct } = payload
    const { cartItems } = state

    /* let productInCart = cartItems.find((item) => item.idProduct === idProduct) */

    switch (type) {
        case actionTypes.ADD_TO_CART:
            var existingProduct = cartItems.find((item) => item.idProduct === idProduct);

            if (existingProduct) {
                const cartItemUpdated = cartItems.map(item =>
                    item.idProduct === idProduct ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state, cartItems: cartItemUpdated };
            } else {
                const newProduct = { ...payload, quantity: 1 }; // Crear un nuevo objeto para el nuevo producto
                return { ...state, cartItems: [...cartItems, newProduct] };
            }

        case actionTypes.REMOVE_ONE_FROM_CART:
            var cartItemUpdated = cartItems.map((item) =>
                item.idProduct === idProduct ? { ...item, quantity: item.quantity - 1 } : item
            );
            cartItemUpdated = cartItemUpdated.filter((item) => item.quantity > 0);
            return { ...state, cartItems: cartItemUpdated };

        case actionTypes.REMOVE_ALL_FROM_CART:
            cartItemUpdated = cartItems.filter((item) => item.idProduct !== idProduct);
            return { ...state, cartItems: cartItemUpdated };

        case actionTypes.CLEAR_CART:
            return { ...state, cartItems: [] };

        default:
            return state;
    }
}
