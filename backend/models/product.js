const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    gasoline: String,
    image: String,
})

exports.Product = mongoose.model('Product', productSchema);
