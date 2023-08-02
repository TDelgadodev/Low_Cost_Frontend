export function getTotalPricesItems(cartItems) {
    return cartItems.map((item) => item.quantity * item.price)
}

export function getTotalProductsInCart(cartItems) {
    return cartItems.reduce((acc, product) => acc + product.quantity, 0);
}