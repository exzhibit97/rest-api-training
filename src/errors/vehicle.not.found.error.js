const HttpStatus = require('../utils/http.status');

class VehicleNotFoundError extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'vehicle-not-found-error';

        this.message = message ||
            'There is no such vehicle in database';

        this.status = status || HttpStatus.HTTP_400_BAD_REQUEST;
    }
}

module.exports = VehicleNotFoundError;
