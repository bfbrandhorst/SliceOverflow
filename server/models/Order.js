

const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    pizzas:[
        {
            type:Schema.Types.ObjectId,
            ref:'PizzaOrder',
            required:true
        }
    ]
})

const Order = model('Order',orderSchema);
module.exports = Order;