const ErrorTemplates = require('../utils/ErrorTemplates.js')

const appErrorHandler = (err, req, res, next) => {
    if (err instanceof ErrorTemplates) {
        console.error('Status: ', err.status)
        console.error('Message: ', err.message)
        console.error('Errors: ', err.errors)

        return res.status(err.status).json({ status: err.status, message: err.message, errors: err.errors })
    }
    console.error(err)
    res.status(500).json({ status: 500, message: 'Unexpected error !' })
}

module.exports = appErrorHandler
