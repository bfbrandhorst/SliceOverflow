import React from 'react';
//import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Menu.css'
import CRUD from '../assets/CRUD.jpg'
import This from '../assets/This.jpg'
import Cheese from '../assets/Cheese.jpg'
import GithubGarden from '../assets/GithubGarden.jpg'
import BooleanByte from '../assets/BooleanByte.jpg'
import HackersParadise from '../assets/HackersParadise.jpg'
import { ADD_TO_CART } from '../utils/reducers';

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

  const [quantities, setQuantities] = useState(pizzaArray.map(() => 1));

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };
  
  useEffect(()=> {
    console.log(pizzaArray)
  },
  [pizzaArray]
)



  return (
    <div>
      <h1>Menu</h1>
      <p>This is the menu page.</p>

      <section className='pizzaContainer'>
      {pizzaArray.map((pizza, index) =>  (
         
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
                  <span>{quantities[index]}</span>
                  <button onClick={() => handleIncrease(index)}>⬆</button>
                </div>
                <br />
                <button onClick = { () => ADD_TO_CART(pizzaOrder) } >Add to Cart</button>
             </div>
          </div>
            
        )
      )}
      </section>
    </div>
  );
};

export default Menu;