const CustomApiError = require("../error/custom-error");

const logIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomApiError("Please provide email and password", 404);
  }

  const id = new Date.now().getDate.now();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
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
