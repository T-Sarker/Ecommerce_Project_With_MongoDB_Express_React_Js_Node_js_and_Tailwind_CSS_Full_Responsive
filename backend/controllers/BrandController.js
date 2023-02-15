const Brand = require('../models/Brands')

const fs = require('fs')
const imgResizer = require('../middlewares/imgResize')

exports.add = async (req, res, next) => {
    const imgPath = 'public/uploads/'
    try {
        const brand = await Brand.findOne({ name: req.body.name })
        // checking id brand already exists or not
        if (brand) {
            return res.status(400).json({ type: 'error', msg: 'Brand already exists' })
        }
        const result = await Brand.create({ name: req.body.name, image: req.file.filename })
        imgResizer.imgResize(req.file, 'brand')
        return res.status(200).json({ type: 'success', result })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.allBrand = async (req, res, next) => {
    try {
        const allBrands = await Brand.find({ status: true })
        return res.status(200).json(allBrands)
    } catch (error) {
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.update = async (req, res, next) => {
    const imgPath = 'public/uploads/'
    try {
        const brand = await Brand.findById(req.body.id)

        if (!brand) {
            return res.status(404).json({ type: 'error', msg: 'No data found' })
        }
        if (req.file !== undefined) {
            console.log(imgPath + 'brand/' + brand.image);
            fs.unlink(imgPath + 'brand/' + brand.image, err => { console.log(err); })
            imgResizer.imgResize(req.file, 'brand')
            const cat = await Brand.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name, image: req.file.filename } }, { new: true })
            return res.status(200).json(cat)
        }
        const cat = await Brand.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name } }, { new: true })
        return res.status(200).json(cat)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, { $set: { name: "No Brand", status: false } }, { new: true })
        return res.status(200).json(brand)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}