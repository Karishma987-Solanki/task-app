const { con } = require("../config/connection");

const signupUser = (first_name, last_name, email, password) => {
  const sql = `INSERT INTO user (first_name, last_name, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}');`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(true);
    });
  });
};

const forgotPassword = (email, new_password) => {
  const sql = `UPDATE user SET password = '${new_password}' where email = '${email}';`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(true);
    });
  });
};

module.exports = {
  signupUser,
  forgotPassword,
};
