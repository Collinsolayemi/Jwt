const express = require("express");

const { dashBoard, logIn } = require("../controllers/main");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashBoard);
router.route("/login").post(logIn);

module.exports = router;
