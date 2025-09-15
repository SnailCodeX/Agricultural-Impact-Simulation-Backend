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
    async getSoilById(req, res, next) {
    try {
      const soil = await Soil.findById(req.params.id);
      if (!soil) {
        return res.status(404).json({ message: "Soil not found" });
      }
      res.json(soil);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = SoilDao;
