const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    productname: {
        type: 'string',
        required: true,
        unique: true,
        minLength: 2,
        trim: true
    },
}, {
    timestamp: true
});

const Product = mongoose.model('User', userSchema);

module.exports = Product;