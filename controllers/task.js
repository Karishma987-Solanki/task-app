const createTask = (req, res) => {
  req.json({ result: "create-task" });
};

module.exports = {
  createTask,
};
