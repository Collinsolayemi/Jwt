const CustomApiError = require("./custom-error");
const badRequestError = require("./bad-request");
const unauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomApiError,
  badRequestError,
  unauthenticatedError,
};
