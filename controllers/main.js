const logIn = async (req, res) => {
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
