const express = require("express");
const { createTask } = require("../controllers/task");
const router = express();

router.get("/create-task", createTask);

module.exports = router;
