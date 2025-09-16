const mongoose = require("mongoose");

const SoilSchema = new mongoose.Schema({
  soilType: {
    type: String,
    enum: ["sandy", "loamy", "clayey", "peaty", "chalky"],
    required: true,
  },
  soilPH: {
    type: Number,
    min: 0,
    max: 14,
    required: true,
  },
});

module.exports = mongoose.model("Soil", SoilSchema);
