export const setCart = (pizzaOrderArray) => {
    console.log(pizzaOrderArray)
  
    // const cart = localStorage.getItem('cart')
    // ? JSON.parse(localStorage.getItem('cart'))
    // : [];

    //cart.push(pizzas

    localStorage.setItem('cart', JSON.stringify(pizzaOrderArray))
}
  