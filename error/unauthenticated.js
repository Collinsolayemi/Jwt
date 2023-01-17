const CustomApiError = require("./custom-error");

class unauthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = unauthenticatedError;
