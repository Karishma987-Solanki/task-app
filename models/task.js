const { con } = require("../config/connection");

const getTasks = (user_id) => {
  const sql = `SELECT * FROM task where user_id = ${user_id};`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const createTask = (title, description, user_id) => {
  const sql = `INSERT INTO task (title, description, user_id) VALUES ('${title}', '${description}', ${user_id});`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(true);
    });
  });
};

const updateTask = (title, description, id) => {
  const sql = `UPDATE task SET title = '${title}', description = '${description}' where id = ${id};`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(true);
    });
  });
};

const deleteTask = (id) => {
  const sql = `DELETE FROM task WHERE id = ${id};`;
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(true);
    });
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
