const Farm = require("../models/farm.models");

class FarmDao {
  async getAllFarms(req, res, next) {
    try {
      const farms = await Farm.find();
      if (!farms) {
        res.json({
          success: false,
          data: [],
          message: "data not found",
        });
      }
      res.status(200).json({
        success: true,
        data: farms,
        message: "data received successfully",
      });
    } catch (err) {
      return next(err);
    }
  }
  async getDropdowns(req, res, next) {
    try {
      const getEnumValues = (path) => Farm.schema.path(path).enumValues || [];

      res.json({
        farmSize: getEnumValues("farmSize"),
        mainCrop: getEnumValues("mainCrop"),
        farmingPractice: getEnumValues("farmingPractice"),
        irrigation: getEnumValues("irrigation"),
        method: getEnumValues("method"),
        technologyLevel: getEnumValues("technologyLevel"),
        biology: getEnumValues("biology"),
        inventionLevel: getEnumValues("inventionLevel"),
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = FarmDao;
