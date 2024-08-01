export const setCart = (pizzaOrderArray) => {
    console.log(pizzaOrderArray)

    localStorage.setItem('cart', JSON.stringify(pizzaOrderArray))
}
  