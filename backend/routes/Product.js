const express = require('express')
const ProductController = require('../controllers/ProductController')
const upload = require('../middlewares/uploads')
const auth = require('../middlewares/authCheck')
const router = express.Router();

//routes declare
router.post('/add', upload.array('images'), ProductController.add)
router.get('/all', ProductController.allProducts)
router.get('/single/:slug', ProductController.singleProduct)
router.get('/filter/:category/:brand/:price', ProductController.allFilteredProducts)
router.post('/update', upload.array('images'), ProductController.update)
router.get('/delete/:id', ProductController.delete)
router.get('/wishlist', auth, ProductController.allWishList)
router.get('/wishlist/:id', auth, ProductController.storeWishList)
router.get('/wishlist/delete/:id', auth, ProductController.deleteWishList)
router.post('/review/add', auth, ProductController.addReviewData)
module.exports = router