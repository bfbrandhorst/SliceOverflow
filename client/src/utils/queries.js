import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
    user {
      _id
      firstName
      lastName
      email
      password
      order{
        _id
        pizzas {
            pizza {
                _id
                name
                description
                image
                price
                category
            }
            quantity
            size
        }
      }
    }
  }
`

export const QUERY_PIZZAS = gql`
   query Pizzas {
  pizzas {
    _id
    description
    image
    name
    price
  }
}
`

export const QUERY_SINGLE_PIZZA = gql`
    query getPizzas($pizza_id: ID) {
    pizza(pizza_id: $pizza_id) {
      _id
      name
      description
      price
      quantity
      image
    }
  }
`
