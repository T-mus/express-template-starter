class ErrorTemplates extends Error {
    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static BadRequest(message = 'Bad request', errors) {
        return new ErrorTemplates(400, message, errors)
    }
    static NotAuthorized(message = 'Not authorized') {
        return new ErrorTemplates(401, message)
    }
    static Forbidden(message = 'Access denied') {
        return new ErrorTemplates(403, message)
    }
    static NotFound(message = 'Not found') {
        return new ErrorTemplates(404, message)
    }
    static UnsupportedMedia(message = 'Unsupported files type') {
        return new ErrorTemplates(415, message)
    }
    static InternalError(message, errors) {
        return new ErrorTemplates(500, message, errors)
    }
}

module.exports = ErrorTemplates

//| 408 - час для запиту вичерпано (Request timeout)
