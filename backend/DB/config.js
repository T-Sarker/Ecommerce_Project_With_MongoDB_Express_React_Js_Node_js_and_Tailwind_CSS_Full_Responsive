const mongoose = require('mongoose')

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL_STRING)
        console.log("DB connected");
    } catch (error) {
        console.log("DB not connected" + error);
    }
}

module.exports = db