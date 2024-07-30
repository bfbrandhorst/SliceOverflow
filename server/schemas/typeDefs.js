

const typeDefs = `
  type Pizza {
    _id: ID
    name: String!
    description: String
    image: String!
    price: Float!
  }

  input PizzaInput {
    _id: ID
    name: String!
    description: String
    image: String!
    price: Float!
  }
  
  type PizzaOrder {
    pizza: Pizza!
    quantity: Int!
    size: String!
  }
  
  input PizzaOrderInput {
    pizza: ID!
    quantity: Int!
    size: String!
  }


  type Order {
    _id: ID
    purchaseDate: String
    pizzas: [PizzaOrder]!
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    order(_id: ID!): Order
    checkout(pizzas: [PizzaOrderInput]!): Checkout
    pizzas: [Pizza]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(pizzas: [PizzaOrderInput]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
