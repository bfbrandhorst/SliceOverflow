import { getCart } from "../../utils/localStorage"

export const orderTotal = () => {
    const cart = getCart()

    let total = 0
    for (let i = 0; i < cart.length; i++){
        total = cart[i].price * cart[i].quantity
    }
    return total
}