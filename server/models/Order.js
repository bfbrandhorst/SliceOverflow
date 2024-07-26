const { Schema, model } = require('mongoose');
const pizzaOrderSchema = require('./PizzaOrder')

const orderSchema = new Schema({
    pizzas:[pizzaOrderSchema]
})

const Order = model('Order',orderSchema);
module.exports = Order;