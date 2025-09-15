const Farm = require("../models/farm.models");
const Farmer = require("../models/farmer.models");
const Soil = require("../models/soil.models");
const Climate = require("../models/climate.models");

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
  async insertData(req, res, next) {
    try {
      const { farmerName, phoneNumber, location, experience } = req.body;
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
      console.log("---------", req.body, "-----------------");

      const newFarmer = new Farmer({
        farmerName,
        phoneNumber,
        location,
        experience,
      });
      const farmerData = await newFarmer.save();

      const newSoil = new Soil({
        soilType,
        soilPH,
      });
      const soilData = await newSoil.save();

      const newClimate = new Climate({
        climateType,
        season,
      });
      const climateData = await newClimate.save();

      const newFarm = new Farm({
        farmer: farmerData._id,
        soil: soilData._id,
        climate: climateData._id,
        // ...other fields
      });
      const farmData = await newFarm.save();  

    } catch (err) {
      return next(err);
    }
  }
}

module.exports = FarmDao;
