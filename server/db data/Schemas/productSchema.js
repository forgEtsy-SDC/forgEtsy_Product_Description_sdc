const mongoose = require('mongoose');
const imageSchema = require('./imageSchema');

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
    },
    product_options: {
        option_1: {
            title: String,
            description_1: String,
            description_2: String,
            description_3: String,
            description_4: String,
        },
        option_2: {
            title: String,
            description_1: String,
            description_2: String,
            description_3: String,
            description_4: String,
        },
        option_3: {
            title: String,
            description_1: String,
            description_2: String,
            description_3: String,
            description_4: String,
        },
    },
});