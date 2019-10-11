const { Products } = require('../db');
const faker = require('faker');

module.exports = productsSave = products => {
    Products.insertMany(products)
        .then((data) => {
            console.log('...Saved products to database...')
            const reviews = [];
            for (let i = 0; i < data.length; i++) {
                let listing_id = data[i].listing_id;
                let max = 6;
                let min = 4;
                const random = Math.floor((Math.random() * (max - min)) + min + 1);
                for (let j = 0; j < random; j++) {
                    let review = {
                        review_id: Number(`${listing_id}${i}${j}`),
                        date: faker.date.past(45),
                        description: faker.lorem.sentences(),
                        rating: Math.floor((Math.random() * 6)),
                        user_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                        user_photo_url: faker.image.avatar(),
                        product_id: listing_id,
                        product_user_image_url: 'FIND A ONE THINGY PICTURE ITEM BOI',
                    }
                    reviews.push(review);
                }
            }
            return reviews;
        })
        .catch((err) => {
            console.log('...product saving err... :(');
        })
}