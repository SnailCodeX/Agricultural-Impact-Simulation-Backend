const Farm = require("../models/farm.models");
const Farmer = require("../models/farmer.models");
const Soil = require("../models/soil.models");
const Climate = require("../models/climate.models");

class FarmDao {
  async getAllFarms(req, res, next) {
    try {
      const farms = await Farm.find();
      console.log("-------------", farms, "-------------");

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
  async insertData(req, res, next) {
    try {
      const { farmName, phoneNumber, location, experience } = req.body;
      const {
        farmSize,
        mainCrop,
        farmingPractice,
        irrigation,
        method,
        technologyLevel,
        biology,
        inventionLevel,
      } = req.body;

      const { soilType, soilPH } = req.body;
      const { climateType, season } = req.body;

      const newFarmer = new Farmer({
        farmName,
        phoneNumber,
        location,
        experience,
      });
      const farmerData = await newFarmer.save();

      /* soil climate .... search id integration*/
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
  async getClimateById(req, res, next) {
    try {
      const climate = await Climate.findById(req.params.id);
      if (!climate) {
        return res.status(404).json({ message: "Climate not found" });
      }
      res.json(climate);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FarmDao;
