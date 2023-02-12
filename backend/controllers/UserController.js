const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const sharp = require('sharp')
// const path = require('path')
const fs = require('fs')

exports.register = async (req, res, next) => {
    let { name, email, phone, password, address } = req.body
    password = bcrypt.hashSync(password, 10);
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return res.status(400).json({ type: 'error', msg: 'User Already Exists' })
    }
    const { filename: image } = req.file;
    // await sharp(req.file.path)
    //     .resize(200, 200)
    //     .jpeg({ quality: 90 })
    //     .toFile(
    //         path.resolve(req.file.destination, 'resized', image)
    //     )
    try {
        const user = await User.create({
            name, email, phone, image: req.file.filename, password, address
        })

        return res.status(200).json({ type: 'success', user })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ type: 'error', msg: 'error' + error })
    }
}


exports.login = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email })
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const userData = {
                    id: user._id,
                    name: user.name,
                    isAdmin: user.isAdmin.admin,
                    role: user.isAdmin.role,
                    token: generateToken(user._id)
                }
                return res.json(userData)
            } else {
                return res.status(400).json({ type: 'error', msg: "Wrong information" })
            }
        } else {
            return res.status(400).json({ type: 'error', msg: 'User Don\'t Exists' })
        }
    } catch (error) {
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}

// updating the profile  
exports.update = async (req, res, next) => {
    let { name, email, phone, address } = req.body
    const imgPath = 'public/uploads/'
    try {
        const OldUser = await User.findById(req.body.id)
        if (req.file !== undefined) {
            fs.unlink(imgPath + OldUser.image, err => console.log(err))
            const user = await User.findByIdAndUpdate(req.body.id, { $set: { name, email, image: req.file.filename, phone, address } }, { new: true })
            let userdta = {
                id: user._id,
                name: user.name,
                isAdmin: user.isAdmin.admin,
                role: user.isAdmin.role,
                token: generateToken(user._id)
            }
            return res.json(userdta)
        }

        if (req.file === undefined) {
            const user = await User.findByIdAndUpdate(req.body.id, { $set: { name, email, phone, address } }, { new: true })
            let userdta = {
                id: user._id,
                name: user.name,
                isAdmin: user.isAdmin.admin,
                role: user.isAdmin.role,
                token: generateToken(user._id)
            }
            return res.json(userdta)
        }
    } catch (error) {
        return res.status(400).json({ type: 'error', msg: 'Something wrong! try again' + error })
    }
}



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    });
}
