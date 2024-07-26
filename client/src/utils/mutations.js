export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ORDER = gql`
    mutation addOrder(pizzas: [PizzaOrderInput]!)
        addOrder(pizzas: [PizzaOrderInput]!)
            order{
                _id
                pizzas{
                    _id
                    name
                    description
                    image
                    price
                }
            }
`

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
`
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