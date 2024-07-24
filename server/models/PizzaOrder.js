const { Schema, model } = require('mongoose');

const pizzaOrderSchema = new Schema({
        pizza: [{
            type: Schema.Types.ObjectId,
            ref: 'Pizza',
            required: true
        }],
        quantity: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        }
});

const PizzaOrder = model('PizzaOrder', pizzaOrderSchema)

module.exports = PizzaOrder;