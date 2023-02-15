const express = require('express')
const BrandController = require('../controllers/BrandController')
const upload = require('../middlewares/uploads')
const router = express.Router()

router.post('/add', upload.single('image'), BrandController.add)
router.get('/all', BrandController.allBrand)
router.post('/update', upload.single('image'), BrandController.update)
router.get('/delete/:id', BrandController.delete)


module.exports = router