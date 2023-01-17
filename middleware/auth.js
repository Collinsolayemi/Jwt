{
  const CustomApiError = require("../error/custom-error");
  const jwt = require("jsonwebtoken");

  const aunthenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new CustomApiError("Aunthentication error, no token provided", 401);
      next();
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { id, username } = decoded;
      req.user = { id, username };
      next();
    } catch (err) {
      throw new CustomApiError("Not authorize to access this route", 401);
    }
  };

  module.exports = aunthenticationMiddleware;
}
