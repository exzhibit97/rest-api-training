const HttpStatus = require('../utils/http.status');

class VehicleNotUpdatedError extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'vehicle-not-updated-error';

        this.message = message ||
            'Failed to update vehicle. Check if given ID is correct.';

        this.status = status || HttpStatus.HTTP_400_BAD_REQUEST;
    }
}

module.exports = VehicleNotUpdatedError;
