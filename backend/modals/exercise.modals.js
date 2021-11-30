const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname: { type: 'string', required: true },
    notes: { type: 'string', required: true},
    quantity: { type: 'number', required: true},
    date: { type: 'string', required: true}
}, {
    timestamp: true
});

const Grocery = mongoose.model('Product', productSchema);

module.exports = Grocery;