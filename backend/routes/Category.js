const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const upload = require('../middlewares/uploads')
const router = express.Router()

router.post('/add', upload.single('image'), CategoryController.add)
router.get('/all', CategoryController.allCategory)
router.post('/update', upload.single('image'), CategoryController.update)
router.get('/delete/:id', CategoryController.delete)


module.exports = router