const express = require('express')
const UserController = require('../controllers/UserController')
const upload = require('../middlewares/uploads')
const router = express.Router();

/**
user routes defined and linked to controller
*/
router.post('/register', upload.single('image'), UserController.register)
router.post('/login', UserController.login)
router.post('/update', upload.single('image'), UserController.update)


module.exports = router