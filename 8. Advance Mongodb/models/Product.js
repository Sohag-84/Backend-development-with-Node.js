const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    category:String,
    prince:Number,
    inStock: Boolean,
    tags: [String]
});


module.exports = mongoose.model("Product",ProductSchema);