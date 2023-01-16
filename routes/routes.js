const express = require("express");
const { dashBoard, logIn } = require("../controllers/main");
const router = express.Router();

router.route("/dashboard").get(dashBoard);
router.route("/login").post(logIn);

module.exports = router;
