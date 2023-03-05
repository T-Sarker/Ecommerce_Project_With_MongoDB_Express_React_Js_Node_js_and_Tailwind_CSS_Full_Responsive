const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const wishlistModel = mongoose.model('Wishlist', wishlistSchema)

module.exports = wishlistModel