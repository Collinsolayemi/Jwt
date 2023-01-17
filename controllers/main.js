const CustomApiError = require("../error/custom-error");
const jwt = require("jsonwebtoken");

const logIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomApiError("Please provide email and password", 404);
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created succesfully", token });
};

const dashBoard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new CustomApiError("Aunthentication error, no token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
      msg: `Hello ${decoded.username}`,
      secret: `Here is your authorizwed data your lucky number is ${luckyNumber}`,
    });
  } catch (err) {
    throw new CustomApiError("Not authorize to access this route", 401);
  }
};
module.exports = { logIn, dashBoard };
