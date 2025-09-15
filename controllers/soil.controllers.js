const SoilDao = require("../dao/soil.dao");
const SoilInstances = new SoilDao();

module.exports = {
  getAllSoils: (req, res, next) => SoilInstances.getAllSoils(req, res, next),
  getSoilById: (req, res, next) => SoilInstances.getSoilById(req, res, next),
};
