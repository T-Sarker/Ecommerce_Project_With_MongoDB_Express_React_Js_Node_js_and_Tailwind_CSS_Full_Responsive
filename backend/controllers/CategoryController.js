const Category = require('../models/Category')
// const sharp = require('sharp')
// const path = require('path')
const fs = require('fs')
const imgResizer = require('../middlewares/imgResize')

exports.add = async (req, res, next) => {
    const imgPath = 'public/uploads/'
    try {
        const category = await Category.findOne({ name: req.body.name })
        // checking id category already exists or not
        if (category) {
            return res.status(400).json({ type: 'error', msg: 'Category already exists' })
        }
        const result = await Category.create({ name: req.body.name, image: req.file.filename })
        imgResizer.imgResize(req.file, 'category')
        return res.status(200).json({ type: 'success', result })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.allCategory = async (req, res, next) => {
    try {
        const allCat = await Category.find({ status: true })
        return res.status(200).json(allCat)
    } catch (error) {
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.update = async (req, res, next) => {
    const imgPath = 'public/uploads/'
    try {
        const category = await Category.findById(req.body.id)
        console.log(category.image);
        if (!category) {
            return res.status(404).json({ type: 'error', msg: 'No data found' })
        }
        if (req.file !== undefined) {
            console.log(imgPath + 'category/' + category.image);
            fs.unlink(imgPath + 'category/' + category.image, err => { console.log(err); })
            imgResizer.imgResize(req.file, 'category')
            const cat = await Category.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name, image: req.file.filename } }, { new: true })
            return res.status(200).json(cat)
        }
        const cat = await Category.findByIdAndUpdate(req.body.id, { $set: { name: req.body.name } }, { new: true })
        return res.status(200).json(cat)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, { $set: { name: "No category", status: false } }, { new: true })
        return res.status(200).json(category)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}