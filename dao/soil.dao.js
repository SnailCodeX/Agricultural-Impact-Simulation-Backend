const Soil = require("../models/soil.models");

class SoilDao {
  async getAllSoils(req, res, next) {
    try {
      const soils = await Soil.find();
      if (!soils) {
        res.json({
          success: false,
          data: [],
          message: "data not found",
        });
      }
      res.status(200).json({
        success: true,
        data: soils,
        message: "data received successfully",
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = SoilDao;
