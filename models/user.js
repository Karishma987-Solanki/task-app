const { con } = require("../config/connection");

const getUser = (email) => {
  const sql = `SELECT * FROM user where email = '${email}';`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      resolve(null);
    });
  });
};

module.exports = {
  getUser,
};
