import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($pizzas: [PizzaOrderInput]!) {
    addOrder(pizzas: $pizzas) {
      _id
      pizzas {
        quantity
        }
        pizza {
          _id
          description
          image
          name
          price
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser {
    updateUser {
      _id
      email
      firstName
      lastName
      orders {
        _id
        pizzas {
          pizza {
            _id
            description
            image
            name
            price
          }
          quantity
          size
        }
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
