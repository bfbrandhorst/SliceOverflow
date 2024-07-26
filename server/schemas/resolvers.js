const { User, Order, Pizza, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    category: async () => {
      return await Category.find({});
    },
    user: async (parent, args, context) => {
      console.log("Context data: ", context.user)
      if (context.user) {
        return await User.findById(context.user._id).populate({
          path: 'orders.pizzas.pizza',
          model: 'Pizza'
        });
        return await User.findById(context.user._id) .populate({
          path: 'orders.pizzas.pizza',
          model: 'Pizza'
        }); 
      }
      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        return await Order.findById(_id).populate({
          path: 'pizzas.pizza',
          model: 'Pizza'
        });
      }
      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, { pizzas }, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ pizzas });
      const line_items = [];

      const { pizzas: pizzaArr } = await order.populate('pizzas.pizza').execPopulate();

      for (let i = 0; i < pizzaArr.length; i++) {
        const product = await stripe.products.create({
          name: pizzaArr[i].pizza.name,
          description: pizzaArr[i].pizza.description,
          images: [`${url}/images/${pizzaArr[i].pizza.image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: pizzaArr[i].pizza.price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: pizzaArr[i].quantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { pizzas }, context) => {
      console.log("Context: ", context);
      if (context.user) {
        const order = new Order({ pizzas });
        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        return order;
      }
      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, { firstName, lastName, email, password }, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, { firstName, lastName, email, password }, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
