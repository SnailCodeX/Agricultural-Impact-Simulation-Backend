const mongoose = require("mongoose");

const ClimateSchema = new mongoose.Schema({
  climateType: {
    type: String,
    enum: ["rainy", "dry", "humid", "arid", "temperate", "continental", "others"],
    required: true
  },
  season: {
    type: String,
    enum: ["spring", "summer", "autumn", "winter", "all-year"],
    required: false
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ClimateParameter", ClimateSchema);
