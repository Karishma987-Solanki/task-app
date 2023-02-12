const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connection = require("./config/connection");
const authRoute = require("./views/auth");
const userRoute = require("./views/user");
const taskRoute = require("./views/task");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({ result: "Hello World!" });
});

app.use(authRoute);
app.use(userRoute);
app.use(taskRoute);

connection.init();

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
