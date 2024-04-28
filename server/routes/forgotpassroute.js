const express = require("express");
const { sendotp, verifyotp } = require("../controller/forgotpassword.js");
const auth = require("../middleware/userauth.js");
const router = express.Router();

router.post("/sendotp", sendotp);
router.post("/verify", auth, sendotp);

module.exports = router;
