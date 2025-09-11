const FarmerDao = require("../dao/farmer.dao");
const farmInstances = new FarmerDao();

module.exports = {
  getAllFarmers: (req, res, next) =>
    farmInstances.getAllFarmers(req, res, next),
};
