const express = require("express");
const {
  fetchTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const router = express();

router.get("/task", fetchTask);
router.post("/task", createTask);
router.put("/task", updateTask);
router.delete("/task", deleteTask);

module.exports = router;
