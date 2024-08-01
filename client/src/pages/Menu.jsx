import React from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Menu.css'
import { setCart } from './Cart/CartItem';

import { QUERY_PIZZAS } from '../utils/queries';

const Menu = () => {

  const { loading, data } = useQuery(QUERY_PIZZAS)
  const [pizzas, setPizzas] = useState([])

  const handleIncrease = (index) => {
    const temp = [...pizzas]
    temp[index].quantity +=1
    setPizzas(temp)
  };

  const handleDecrease = (index) => {
    if(pizzas[index].quantity > 1){
      const temp = [...pizzas]
      temp[index].quantity -=1
      setPizzas(temp)
    }


  };

  useEffect(()=> {
    console.log(data, loading)
    if(!data) return

    setPizzas(data.pizzas.map((pizza) => {
      return {...pizza, quantity:0} }))
  },
  [data]
)

  return (
    <div>

      <section className='pizzaContainer'>
      {pizzas.map((pizza, index) =>  (
         
          <div className='pizzaCard' key={index}>
             
             <div className='imageContainer'>
               <img src={pizza.image} alt={pizza.name}/>
             </div>
             <div className='pizzaInfo'>
             <h3 className='logo text-2xl'>{pizza.name}</h3>
             <br></br>
             <p>{pizza.description}</p>
             <p>${pizza.price}</p>
             <br></br>
                <div>Quantity:
                  <button onClick={() => handleDecrease(index)}>⬇</button>
                  <span>{pizza.quantity}</span>
                  <button onClick={() => handleIncrease(index)}>⬆</button>
                </div>
                <br />
                <button className= 'rounded-full bg-black text-white p-2 mt-4' onClick = { () => setCart(pizzas) } >Add to Cart</button>
             </div>
          </div>
            
        )
      )}
      </section>
    </div>
  );
};

export default Menu;