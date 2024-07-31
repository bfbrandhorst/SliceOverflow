import React from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Menu.css'
import CRUD from '../assets/CRUD.jpg'
import This from '../assets/This.jpg'
import Cheese from '../assets/Cheese.jpg'
import GithubGarden from '../assets/GithubGarden.jpg'
import BooleanByte from '../assets/BooleanByte.jpg'
import HackersParadise from '../assets/HackersParadise.jpg'
import { QUERY_PIZZAS } from '../utils/queries';

const pizzaArray = [
  {
      "name": "this.pizza",
      "description": "Anchovy",
      "image": This,
      "price": 9.99
  },
  {
      "name": "CRUD",
      "description": "Meat Lovers",
      "image": CRUD,
      "price": 9.99
  },
  {
      "name": "C++",
      "description": "Cheese Lovers",
      "image": Cheese,
      "price": 9.99
  },
  {
      "name": "Github Garden",
      "description": "Veggie Lovers",
      "image": GithubGarden,
      "price": 9.99
  },
  {
      "name": "Boolean Byte",
      "description": "1/2 Salami, 1/2 Veggie",
      "image": BooleanByte,
      "price": 9.99
  },
  {
      "name": "Hacker's Paradise",
      "description": "Hawaiian",
      "image": HackersParadise,
      "price": 9.99
  }
  ]

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
             <p>{pizza.price}</p>
             <h3>{pizza.name}</h3>
             <p>{pizza.description}</p>
                <div>Quantity:
                  <button onClick={() => handleDecrease(index)}>⬇</button>
                  <span>{pizza.quantity}</span>
                  <button onClick={() => handleIncrease(index)}>⬆</button>
                </div>
                <br />
                <button onClick = { () => setCart(pizzas) } >Add to Cart</button>
             </div>
          </div>
            
        )
      )}
      </section>
    </div>
  );
};

export default Menu;