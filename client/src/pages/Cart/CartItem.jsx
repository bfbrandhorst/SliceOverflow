export const createPizzaOrder = (pizzaOrderArray, quantity) => {
    const order = {
        name: pizzaOrderArray.name,
        price: pizzaOrderArray.price,
        quantity: quantity
    }

    console.log(order)
}

export const addToCart = (pizzaOrderArray) => {
    // console.log(pizzaId)
    // const pizzaToSave = pizzaArray.find((pizza) => pizza.pizzaId == pizzaId)

    console.log(pizzaOrderArray)
  
    const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

    cart.push(pizzaOrderArray)

    localStorage.setItem('cart', JSON.stringify(cart))
}
  