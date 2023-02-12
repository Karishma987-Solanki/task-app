const models = require("../models/task");
const { getUser } = require("../models/user");
const jwt = require("jsonwebtoken");

const fetchTask = async (req, res) => {
  const { token } = req.query;
  try {
    const userFromToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!userFromToken) {
      return res.json({ result: "Invalid Token!" });
    }

    const user = await getUser(userFromToken.email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }

    const tasks = await models.getTasks(user.id);

    res.json({ result: "Tasks fetched!", tasks });
  } catch (error) {
    res.json({ result: "Failed in fetching user's tasks!" });
  }
};

const createTask = async (req, res) => {
  const { title, description, token } = req.body;
  try {
    const userFromToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!userFromToken) {
      return res.json({ result: "Invalid Token!" });
    }

    const user = await getUser(userFromToken.email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }
    await models.createTask(title, description, user.id);

    res.json({ result: "Task created Successfull" });
  } catch (error) {
    res.json({ result: "Task creation Failed" });
  }
};

const updateTask = async (req, res) => {
  const { title, description, id, token } = req.body;
  try {
    const userFromToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!userFromToken) {
      return res.json({ result: "Invalid Token!" });
    }

    const user = await getUser(userFromToken.email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }
    await models.updateTask(title, description, id);

    res.json({ result: "Task updated Successfull" });
  } catch (error) {
    res.json({ result: "Task updation Failed" });
  }
};

const deleteTask = async (req, res) => {
  const { id, token } = req.query;
  try {
    const userFromToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!userFromToken) {
      return res.json({ result: "Invalid Token!" });
    }

    const user = await getUser(userFromToken.email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }
    await models.deleteTask(id);

    res.json({ result: "Task deleted Successfull" });
  } catch (error) {
    res.json({ result: "Task deletion Failed" });
  }
};

module.exports = {
  fetchTask,
  createTask,
  updateTask,
  deleteTask,
};
