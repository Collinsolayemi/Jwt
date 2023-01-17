const express = require("express");
const { dashBoard, logIn } = require("../controllers/main");
const router = express.Router();
const aunthenticationMiddleware = require("../middleware/auth");

router.route("/dashboard").get(aunthenticationMiddleware, dashBoard);
router.route("/login").post(logIn);

module.exports = router;
