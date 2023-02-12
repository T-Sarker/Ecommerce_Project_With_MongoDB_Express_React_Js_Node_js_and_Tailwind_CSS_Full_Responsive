const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    address: {
        type: String
    },
    isAdmin: {
        admin: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: '0'
        }
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel