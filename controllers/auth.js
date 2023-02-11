const models = require("../models/auth");

const signupUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await models.getUser(email);

    if (user) {
      return res.json({ result: "User already registered!" });
    }
    await models.signupUser(first_name, last_name, email, password);

    res.json({ result: "Signup Successfull" });
  } catch (error) {
    res.json({ result: "Signup Failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await models.getUser(email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }
    if (password !== user.password) {
      return res.json({ result: "Invalid Password!" });
    }

    res.json({ result: "login successful", token: "" });
  } catch (error) {
    res.json({ result: "login failed" });
  }
};

const forgotPassword = async (req, res) => {
  const { old_password, new_password, confirm_password, email } = req.body;
  try {
    if (new_password !== confirm_password) {
      return res.json({ result: "Mismatch in new and confirm password!" });
    }
    const user = await models.getUser(email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }
    if (old_password !== user.password) {
      return res.json({ result: "Wrong old password!" });
    }
    await models.forgotPassword(email, new_password);

    res.json({ result: "Password changed successfully" });
  } catch (error) {
    res.json({ result: "Password changed failed" });
  }
};

const getUserdetails = async (req, res) => {
  const { token, email } = req.query;
  try {
    const user = await models.getUser(email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }

    res.json({ result: "User details fetched", user });
  } catch (error) {
    res.json({ result: "Failed" });
  }
};

module.exports = {
  signupUser,
  loginUser,
  forgotPassword,
  getUserdetails,
};
