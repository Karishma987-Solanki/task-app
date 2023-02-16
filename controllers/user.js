const models = require("../models/user");

const getUserdetails = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await models.getUser(email);

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
