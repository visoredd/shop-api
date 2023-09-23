const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Alien',alienSchema)