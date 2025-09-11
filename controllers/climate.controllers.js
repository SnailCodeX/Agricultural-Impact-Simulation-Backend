const ClimateDao = require("../dao/climate.dao");
const climateInstances = new ClimateDao();

module.exports = {
  getAllClimate: (req, res, next) => climateInstances.getAllClimate(req, res, next),
};
