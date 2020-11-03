const mongoose = require('mongoose')

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    unit: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    fakeprice: {
        type: Number,
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model("Products", ProductSchema)