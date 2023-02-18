const Product = require('../models/Products')
const slug = require('../middlewares/slug')
const ImgResize = require('../middlewares/imgResize')
const fs = require('fs')
const mongoose = require('mongoose')

exports.add = async (req, res, next) => {
    const { title, category, brand, details, otherDetails, discount, price, quantity, options } = req.body

    let images = []; //holds the image names
    req.files.forEach((img, index) => {
        images.push(img.filename)
    });
    // creating thumbnails
    ImgResize.imgResize(req.files[0], 'product')
    //thumbnail name
    let thumbnail = req.files[0].filename
    // creating slug
    const sluged = slug.MakeSlug(title)

    try {
        const result = await Product.create({
            title, slug: sluged, category, brand, details, otherDetails, options, discount, price, quantity, thumbnail, images
        })
        return res.status(200).json({ type: 'success', result })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.allProducts = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ _id: -1 }).populate('category').populate('brand')
        return res.status(200).json({ type: 'success', products })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}


// finding all the products accorfing to user filter
exports.allFilteredProducts = async (req, res, next) => {
    try {
        let query = [] //to create array of object to hold the conditional data

        if (req.params.category !== 'no') { //if there is a value other than the default no then push object to array
            query.push({ category: req.params.category })
        }
        if (req.params.brand !== 'no') {  //if there is a value other than the default no then push object to array
            query.push({ brand: req.params.brand })
        }
        if (req.params.price !== 'no') {  //if there is a value other than the default no then push object to array
            query.push({ price: { $lte: parseInt(req.params.price) } })
        }

        const filterProduct = await Product.find({ $and: query }) //filtering the data

        return res.status(200).json({ type: 'success', filterProduct })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.singleProduct = async (req, res, next) => {
    try {
        const result = await Product.findOne({ slug: req.params.slug }).populate('category').populate('brand')
        return res.status(200).json({ type: 'success', result })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}


exports.update = async (req, res, next) => {
    const { title, category, brand, details, otherDetails, discount, price, quantity, options } = req.body
    const thumbnailPath = 'public/uploads/product/'
    const imgPath = 'public/uploads/'
    console.log(req.files);
    try {

        const oldProduct = await Product.findById(req.body.id)

        if (oldProduct) {

            if (req.files.length !== 0) { //if new images available
                let images = []; //holds the image names
                req.files.forEach((img, index) => {
                    images.push(img.filename)
                });
                // creating thumbnails
                ImgResize.imgResize(req.files[0], 'product')
                //thumbnail name
                let thumbnail = req.files[0].filename
                // creating slug
                const sluged = slug.MakeSlug(title)
                const result = await Product.findByIdAndUpdate(req.body.id, {
                    $set: {
                        title, slug: sluged, category, brand, details, otherDetails, options, discount, price, quantity, thumbnail, images
                    }
                })
                fs.unlink(thumbnailPath + oldProduct.images[0], err => { console.log(err) })
                oldProduct.images.forEach((img, index) => {
                    if (index > 0) {
                        fs.unlink(imgPath + img, err => { console.log(err) })
                    }
                });

                return res.status(200).json({ type: 'success', msg: "Product Updated" })

            } else {
                const sluged = slug.MakeSlug(title)
                const result = await Product.findByIdAndUpdate(req.body.id, {
                    $set: {
                        title, slug: sluged, category, brand, details, otherDetails, options, discount, price, quantity
                    }
                })
                return res.status(200).json({ type: 'success', msg: "Product Updated" })
            }
        } else {
            return res.status(404).json({ type: 'error', msg: 'No Data Found' })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const thumbnailPath = 'public/uploads/product/'
        const imgPath = 'public/uploads/'
        const result = await Product.findByIdAndRemove(req.params.id)

        fs.unlink(thumbnailPath + result.images[0], err => { console.log(err) })

        result.images.forEach((img, index) => {
            if (index > 0) {
                fs.unlink(imgPath + img, err => { console.log(err) })
            }
        });

        return res.status(200).json({ type: 'success', msg: 'Product Successfuly deleted' })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}