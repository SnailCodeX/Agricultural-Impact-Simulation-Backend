const mongoose = require("mongoose");

const SoilSchema = new mongoose.Schema({
  // Soil type
  soilType: {
    type: String,
    enum: ["sandy", "loamy", "clayey", "peaty", "chalky"],
    required: true,
  },
  // Soil properties
  soilPH: {
    type: Number,
    min: 0,
    max: 14,
    required: true, // acidic(0) → alkaline(14)
  },
});

module.exports = mongoose.model("Soil", SoilSchema);
