export const getCart = () => {
  const cart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

  return cart
}

export const removeFromCart = () => {
  const cart = localStorage.getItem('cart').filter((pizza) => pizza.pizzaId == pizzaId)

  return cart
}

// export const updateQuantity = () => {
//   const cart = localStorage.getItem('cart')
//   cart.find((pizza) => pizza.pizzaId == pizzaId)
// }