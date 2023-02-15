const mongoose = require('mongoose')

const BrandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const BrandModel = mongoose.model('Brand', BrandSchema)

module.exports = BrandModel