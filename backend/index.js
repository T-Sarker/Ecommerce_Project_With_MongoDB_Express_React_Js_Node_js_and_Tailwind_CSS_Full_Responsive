var express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
const cors = require('cors')
const DB = require('./DB/config')
var app = express()
app.use(cors())
const UserRoute = require('./routes/User')
const CategoryRoute = require('./routes/Category')
const BrandROute = require('./routes/Brands')
const ProductRouter = require('./routes/Product')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

DB()
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Connection failed');
    } else {
        console.log('Connection Stablished');

    }
})


app.use('/api/user', UserRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/brand', BrandROute)
app.use('/api/product', ProductRouter)
