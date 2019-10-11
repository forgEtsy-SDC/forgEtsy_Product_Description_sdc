const jewelry = require('./db data/jewelry');
const housewares = require('./db data/housewares');
const accessories = require('./db data/accessories');
const toys = require('./db data/toys');
const productsSave = require('./db data/seedDatabase');

const productSchema = require('./db data/Schemas/productSchema');
const reviewSchema = require('./db data/Schemas/reviewSchema');
const { PORT } = require('./server');
const mongoose = require('mongoose');

// Mongoose
mongoose.connect(`mongodb://localhost:${PORT}/products`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`Database Connected!`)
})

const Products = mongoose.model('Products', productSchema);
const Reviews = mongoose.model('Reviews', reviewSchema);

// Seed database
// productsSave(jewelry.results);
// productsSave(housewares.results);
// productsSave(accessories.results);
// productsSave(toys.results);

module.exports = {
    Products,
    Reviews
}