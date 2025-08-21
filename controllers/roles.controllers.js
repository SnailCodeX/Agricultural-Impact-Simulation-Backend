const RolesDao = require('../dao/roles.dao');
const rolesInstances = new RolesDao();

module.exports = {
  addRole: (req, res, next) => rolesInstances.addRole(req, res, next)
};
