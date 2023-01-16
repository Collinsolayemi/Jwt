const CustomApiError = require("../error/custom-error");

const logIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomApiError("Please provide email and password", 404);
  }
  res.send("Fake login/registser/signup");
};

const dashBoard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello john dee`,
    secret: `Here is your authorizwed data your lucky number is ${luckyNumber}`,
  });
};

module.exports = { logIn, dashBoard };
