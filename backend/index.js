var express = require('express')
require('dotenv').config()
var bodyParser = require('body-parser')
const cors = require('cors')
const DB = require('./DB/config')
var app = express()
app.use(cors())
const UserRoute = require('./routes/User')

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
