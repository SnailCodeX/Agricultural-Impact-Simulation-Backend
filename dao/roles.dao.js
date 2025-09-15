const roles = require("../models/roles.models");

class RolesDao {
   async addRole(req, res, next) {
    try {

      const { roleType } = req.body;

      const existingRole = await roles.findOne({ roleType: roleType.trim() });

      if (existingRole) {
        return res.json({
          success: false,
          data: [],
          message: `Role "${roleType}" already exists`,
        });
      }

      const newRole = new roles({ roleType: roleType.trim() });
      const savedRole = await newRole.save();

      return res.status(201).json({
        success: true,
        data: savedRole,
        message: "Role added successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = RolesDao;
