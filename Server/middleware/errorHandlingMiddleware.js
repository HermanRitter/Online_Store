const ApiError = require('../error/errorApi')

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.res.status(500).json({message: 'Unexpected error'})
}