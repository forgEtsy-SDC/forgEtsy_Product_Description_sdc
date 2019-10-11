module.exports = reviewSchema = new mongoose.Schema({
    review_id: {
        type: Number,
        unique: true,
    },
    date: Date,
    description: String,
    rating: Number,
    user_name: String,
    user_photo_url: String,
    product_id: Number,
    product_user_image_url: String,
})