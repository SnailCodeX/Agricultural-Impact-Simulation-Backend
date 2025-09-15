const UsersDao = require('../dao/users.dao');
const usersInstance = new UsersDao();

module.exports = {
  getAllUsers: (req, res, next) => usersInstance.getAllUsers(req, res, next),
  createUser: (req, res, next) => usersInstance.createUser(req, res, next),
};

