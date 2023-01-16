const express = require("express");
const { dashBoard, logIn } = require("../controllers/main");
const router = express.router();

router.route("/dashbpard").get(dashBoard);
router.route("/login").post(logIn);

module.exports = router;
