const models = require("../models/user");
const jwt = require("jsonwebtoken");

const getUserdetails = async (req, res) => {
  const { token } = req.query;
  try {
    const userFromToken = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!userFromToken) {
      return res.json({ result: "Invalid Token!" });
    }

    const user = await models.getUser(userFromToken.email);

    if (!user) {
      return res.json({ result: "User not found!" });
    }

    res.json({ result: "User details fetched!", user });
  } catch (error) {
    res.json({ result: "Failed in fetching user details!" });
  }
};

module.exports = {
  getUserdetails,
};
