const HttpStatus = require('../utils/http.status');

class IncorrectAccessToken extends Error {

    constructor(message, status, type) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.type = type || 'incorrect-access-token-error';

        this.message = message ||
            'Incorrect access token. Check request header.';

        this.status = status || HttpStatus.HTTP_401_UNAUTHORIZED;
    }
}

module.exports = IncorrectAccessToken;
