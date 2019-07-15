const HttpStatus = require('../utils/http.status');

class VehiclesNotFoundError extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'vehicles-not-found-error';

        this.message = message ||
            'There are no vehicles in database';

        this.status = status || HttpStatus.HTTP_400_BAD_REQUEST;
    }
}

module.exports = VehiclesNotFoundError;
