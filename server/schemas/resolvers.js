const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {

    },
    user:async () => {

    },
    order: async(parent,{_id}) =>{

    },

    checkout: async(parent,{pizzas}) =>{

    }

   
  },
  Mutation: {
    addUser:async (parent,{firstName,lastName,email,password}) => {

    },

    addOrder:async (parent, {pizzas}) => {
      
    },

    updateUser:async (parent,{firstName,lastName,email,password}) => {

    },
    
    login:async(parent,{email,password}) => {

    },
  },
};

module.exports = resolvers;
