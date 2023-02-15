const express = require("express");
const { getUserdetails } = require("../controllers/user");
const router = express();

router.get("/user-details", getUserdetails);

module.exports = router;
