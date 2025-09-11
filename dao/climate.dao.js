const Climate = require("../models/climate.models");

class ClimateDao {
  async getAllClimate(req, res, next) {
    try {
      const climateType = await Climate.find();
      if (!climateType) {
        res.json({
          success: false,
          data: [],
          message: "data not found",
        });
      }
      res.status(200).json({
        success: true,
        data: climateType,
        message: "data received successfully",
      });
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = ClimateDao;

