const express = require('express')
const ProductController = require('../controllers/ProductController')
const upload = require('../middlewares/uploads')

const router = express.Router();

//routes declare
router.post('/add', upload.array('images'), ProductController.add)
router.get('/all', ProductController.allProducts)
router.get('/single/:slug', ProductController.singleProduct)
router.get('/filter/:category/:brand/:price', ProductController.allFilteredProducts)
router.post('/update', upload.array('images'), ProductController.update)
router.get('/delete/:id', ProductController.delete)

module.exports = router