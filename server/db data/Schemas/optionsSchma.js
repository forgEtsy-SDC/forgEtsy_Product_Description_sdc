const mongoose = require('mongoose');

module.exports = optionsSchma = new mongoose.Schema({
    title: String,
    description_1: String,
    description_2: String,
    description_3: String,
    description_4: String,
})