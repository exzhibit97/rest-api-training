const HttpStatus = require('../utils/http.status');

class NotSufficientDataError extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'not-sufficient-data-error';

        this.message = message ||
            'Incorrect format of missing input data.';

        this.status = status || HttpStatus.HTTP_400_BAD_REQUEST;
    }
}

module.exports = NotSufficientDataError;
