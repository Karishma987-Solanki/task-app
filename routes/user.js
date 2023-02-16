const express = require("express");
const { getUserdetails } = require("../controllers/user");
const { isLoggedIn } = require("../middleware/isLoggedIn");
const router = express();

router.get("/user-details", isLoggedIn, getUserdetails);

module.exports = router;
