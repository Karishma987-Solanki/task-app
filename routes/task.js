const express = require("express");
const {
  fetchTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const { isLoggedIn } = require("../middleware/isLoggedIn");
const router = express();

router.get("/task", isLoggedIn, fetchTask);
router.post("/task", isLoggedIn, createTask);
router.put("/task/:id", isLoggedIn, updateTask);
router.delete("/task/:id", isLoggedIn, deleteTask);

module.exports = router;
