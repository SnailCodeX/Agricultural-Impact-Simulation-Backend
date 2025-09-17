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
  };

  async getAllRoles(req, res, next) {
    try {
      const allRoles = await roles.find();
      return res.status(200).json({
        success: true,
        data: allRoles,
        message: "Roles retrieved successfully",
      });
    } catch (error) {
      return next(error);
    }
  };
  
}
module.exports = RolesDao;
