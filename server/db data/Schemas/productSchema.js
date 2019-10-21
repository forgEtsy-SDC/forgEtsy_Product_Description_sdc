const mongoose = require('mongoose');
const imageSchema = require('./imageSchema');
const optionsSchema = require('./optionsSchma');

module.exports = productSchema = new mongoose.Schema({
    listing_id: {
        type: Number,
        unique: true,
    },
    title: String,
    description: String,
    price: Number,
    category_path: [String],
    Images: [imageSchema],
    Shop: {
        shop_id: Number,
        shop_name: String,
        title: String,
        icon_url_fullxfull: String,
        custom_shops_state: Number
    },
    product_options: [optionsSchema],
});