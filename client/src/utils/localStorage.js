// export const addToCart = (pizzaId, pizzaArray) => {
//     console.log(pizzaId, pizzaArray)
//     const pizzaToSave = pizzaArray.filter(pizza => pizza.pizzaId === pizzaId)

//     console.log(pizzaToSave)
  
//     const cart = localStorage.getItem('cart')
//   ? JSON.parse(localStorage.getItem('cart'))
//   : [];

//   cart.push(pizzaToSave)

//   localStorage.setItem('cart', JSON.stringify(cart))
// }

export const getCart = () => {
  const cart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

  return cart
}

export const removeFromCart = () => {}
