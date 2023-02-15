const express = require("express");
const {
  signupUser,
  loginUser,
  forgotPassword,
} = require("../controllers/auth");
const router = express();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/forgot-password", forgotPassword);

module.exports = router;
