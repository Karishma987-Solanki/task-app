const express = require("express");
const {
  signupUser,
  loginUser,
  forgotPassword,
  getUserdetails,
} = require("../controllers/auth");
const router = express();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/get-user-details", getUserdetails);
router.post("/forgot-password", forgotPassword);

module.exports = router;
