

const typeDefs = `
  type Category {
    _id: ID
    name: String!
  }
  input CategoryInput {
    _id: ID
    name: String!
  }

  type Pizza {
    _id: ID
    name: String!
    description: String
    image: String!
    price: Float!
    categories: [Category]
  }

  input PizzaInput {
    _id: ID
    name: String!
    description: String
    image: String!
    price: Float!
    categories: [CategoryInput]
  }
  
  type PizzaOrder {
    pizza: Pizza!
    quantity: Int!
    size: String!
  }
  
  input PizzaOrderInput {
    pizza: PizzaInput!
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
    categories: [Category]
    user: User
    order(_id: ID!): Order
    checkout(pizzas: [PizzaOrderInput]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(pizzas: [PizzaOrderInput]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
