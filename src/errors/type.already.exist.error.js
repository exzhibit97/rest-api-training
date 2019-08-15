const HttpStatus = require('../utils/http.status');

class TypeAlreadyExistError extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'type-alerady-exists';

        this.message = message ||
            'Type with this name already exists.';

        this.status = status || HttpStatus.HTTP_400_BAD_REQUEST;
    }
}

module.exports = TypeAlreadyExistError;
