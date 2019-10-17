const jewelry = require('./db data/jewelry');
const housewares = require('./db data/housewares');
const accessories = require('./db data/accessories');
const toys = require('./db data/toys');
const faker = require('faker')

const productSchema = require('./db data/Schemas/productSchema');
const reviewSchema = require('./db data/Schemas/reviewSchema');
const { username, password } = require('../.config/database.config');

// Mongoose
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(`mongodb+srv://${username}:${password}@products-ofyx1.mongodb.net/forgEtsy?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`...Database Connected...`)
})

Products = mongoose.model('Products', productSchema);
Reviews = mongoose.model('Reviews', reviewSchema);

// Seed database
let jsonData = [
    jewelry.results,
    housewares.results,
    accessories.results,
    toys.results
];

let seedDatabase = function () {
    Promise.all(jsonData.reduce((acc, cur) => {
        return [...acc, Products.insertMany(cur)];
    }, []))
        .then((data) => {
            console.log('...Saved products to database...');
            return data.reduce((acc, cur) => {
                return [...acc, ...cur.reduce((acc, cur) => {
                    for (let i = 0; i < ~~((Math.random() * (6 - 4)) + 4 + 1); i++) {
                        acc = [...acc, {
                            review_id: Number(`${cur.listing_id}${i}`),
                            date: faker.date.past(45),
                            description: faker.lorem.sentences(),
                            rating: Math.floor((Math.random() * 6)),
                            user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                            user_photo_url: faker.image.avatar(),
                            product_id: cur.listing_id,
                            product_user_image_url: 'FIND A ONE THINGY PICTURE ITEM BOI',
                        }];
                    };
                    return acc
                }, [])]
            }, []);
        })
        .then((reviews) => {
            Reviews.insertMany(reviews)
                .then(() => console.log('...Saved reviews to database...'))
        })
        // Add proper error handling
        .catch(err => console.log(err));
}

const seedDatabaseOnce = function (func) {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            return func();
        }
        return
    }
}

seedDatabase = seedDatabaseOnce(seedDatabase);

seedDatabase();

module.exports = {
    Products
};