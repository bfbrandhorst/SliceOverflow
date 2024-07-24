const { Schema, model } = require('mongoose');

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        }
    ]
});

const Pizza = model('Pizza', pizzaSchema)

module.exports = Pizza;