export function getTotalPricesItems(cartItems) {
    return cartItems.map((item) => item.quantity * item.price)
}