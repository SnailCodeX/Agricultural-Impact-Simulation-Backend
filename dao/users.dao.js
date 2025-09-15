const User = require("../models/users.models");
const Role = require("../models/roles.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  };

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email }).populate("role");
      if (!user) {
        return res.json({
          success: false,
          data: [],
          message: "Invalid email or password",
        });
      }

      if (!user.active) {
        return res.json({
          success: false,
          data: [],
          message: "User account is inactive",
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.json({
          success: false,
          data: [],
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role?.roleType },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        success: true,
        data: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role ? user.role.roleType : null,
          active: user.active,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        },
        token: token,
        message: "Login successful",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersDao;
