const Farmer = require("../models/farmer.models");

class FarmerDao {
  async getAllFarmers(req, res, next) {
    try {
      const farmers = await Farmer.find();
      if (!farmers) {
        res.json({
          success: false,
          data: [],
          message: "data not found",
        });
      }
      res.status(200).json({
        success: true,
        data: farmers,
        message: "data received successfully",
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = FarmerDao;