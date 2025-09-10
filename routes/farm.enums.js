const express = require("express");
const Farm = require("../models/farm.model");

const router = express.Router();

function getEnumValues(path) {
  return Farm.schema.path(path).enumValues || [];
}

router.get("/dropdowns", (req, res) => {
  res.json({
    farmSize: getEnumValues("farmSize"),
    mainCrop: getEnumValues("mainCrop"),
    soilType: getEnumValues("soilType"),
    farmingPractice: getEnumValues("farmingPractice"),
    experience: getEnumValues("experience"),
    irrigation: getEnumValues("irrigation"),
    method: getEnumValues("method"),
    technologyLevel: getEnumValues("technologyLevel"),
    biology: getEnumValues("biology"),
    inventionLevel: getEnumValues("inventionLevel")
  });
});

module.exports = router;
