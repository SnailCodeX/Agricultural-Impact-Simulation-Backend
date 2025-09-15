const UsersDao = require('../dao/users.dao');
const usersInstance = new UsersDao();

module.exports = {
  getAllUsers: (req, res, next) => usersInstance.getAllUsers(req, res, next),
  getUserById: (req, res, next) => usersInstance.getUserById(req, res, next),
};

