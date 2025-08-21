const User = require('../models/users.models');
const Role = require('../models/roles.models');
const { response } = require('express');
//const bcrypt = require('bcryptjs');
//const d = require('jsonwebtoken');

class UsersDao {
	async getAllUsers(req, res, next) {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        const usersResponse = users.map(user => ({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role ? user.role.roleType : null,
            active: user.active,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
          }));
        if (!usersResponse || !usersResponse.length){
            return res.json({
                success: false,
                data: [],
                message: "Data not received"
            })
        }
        return res.status(200).json({
            success: true,
            data: usersResponse,
            message: "Data received"
        });
    } catch (error) {
        next(error);
    }
  };
}

module.exports = UsersDao;
