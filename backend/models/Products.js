const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
    },
    slug: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    details: {
        type: String
    },
    otherDetails: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: [],
    options: {},
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            comment: {
                type: String
            }
        }
    ],
    discount: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel