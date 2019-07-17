const IncorrectAccessTokenError = require("../errors/incorrect.access.token");
const standardToken = process.env.ACCESS_TOKEN;

class AuthMiddleware {
  checkToken = async (req, res, next) => {
    try {
      const token = await this.getToken(req);
      console.log(token);
      if (token !== standardToken) {
        throw new IncorrectAccessTokenError();
      }

      return next();
    } catch (error) {
      return res.status(error.status).json({
        message: error.message,
        type: error.type
      });
    }
  };

  getToken = async req => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    return 0;
  };
}

module.exports = AuthMiddleware;
