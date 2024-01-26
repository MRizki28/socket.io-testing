class HttpResponseTraits {
    static success(payload = null, message = " success", code = 200) {
        return {
            code: code,
            message: message,
            data: payload
        }
    }

    static dataNotFound(message = 'Data not found', code = 404) {
        return {
            code: code,
            message: message
        };
    }

    static checkValidation(errors = null, code = 422, message = 'Check your validation') {
        return {
            code: code,
            message: message,
            errors: errors
        }
    }

    static idOrDataNotFound(message = 'ID or data not found', code = 404) {
        return {
            code: code,
            message: message
        };
    }

    static delete(message = 'Success delete', code = 200) {
        return {
            code: code,
            message: message
        };
    }
}

module.exports = HttpResponseTraits;