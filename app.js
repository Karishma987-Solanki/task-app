const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connection = require("./config/connection");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.use(authRoute);
app.use(userRoute);
app.use(taskRoute);

connection.init();

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
