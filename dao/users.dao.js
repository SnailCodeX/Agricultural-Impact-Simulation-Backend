const User = require("../models/users.models");
const Role = require("../models/roles.models");
const SALT_ROUNDS = 10;


class UsersDao {
  async getAllUsers(req, res, next) {
    try {
      const users = await User.find({}).sort({ createdAt: -1 });
      const usersResponse = users.map((user) => ({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role ? user.role.roleType : null,
        active: user.active,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }));
      if (!usersResponse || !usersResponse.length) {
        return res.json({
          success: false,
          data: [],
          message: "Data not received",
        });
      }
      return res.status(200).json({
        success: true,
        data: usersResponse,
        message: "Data received",
      });
    } catch (error) {
      next(error);
    }
  };

  async createUser(req, res, next) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userRole = await Role.findOne({ roleType: "user", active: true });
    if (!userRole) {
      return res.json({
        success: false,
        data: [],
        message: 'Default "user" role not found in the database',
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.json({
        success: false,
        data: [],
        message: "Email already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: userRole._id,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      success: true,
      data: {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        role: userRole.roleType,
        active: savedUser.active,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
}
}

module.exports = UsersDao;
