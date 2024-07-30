import React from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
//import { useState } from 'react';
import { QUERY_PIZZAS } from '../utils/queries';
//import { addToCart } from '../utils/localStorage';

const Menu = () => {

  const {loading, data} = useQuery(QUERY_PIZZAS) //
  const pizzas = data?.pizzas || []
  
  useEffect(()=> {
    console.log(pizzas)
  },
  [pizzas]
)

  return (
    <div>
      <h1>Menu</h1>
      <p>This is the menu page.</p>


      {pizzas.map((pizza, index) => {
        return (
          <div key={index}>{pizza.image}

          {/* <button onClick = { () => addToCart(pizzaOrder) } >Add To Order</button> */}

          </div>
        )
      })}

    </div>
  );
};

export default Menu;