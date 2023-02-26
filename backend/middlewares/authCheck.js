const jwt = require('jsonwebtoken')

const authCheck = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        if (token) {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decode?.id
        }

    } catch (error) {
        return res.status(400).json('User not authorized')
    }
    next()
}

module.exports = authCheck