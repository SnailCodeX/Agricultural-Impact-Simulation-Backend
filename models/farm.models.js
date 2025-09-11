// models/farm.model.js
const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  // Farm details (now required)
  farmSize: {
    type: String,
    enum: ["<5ha", "5-20ha", "20-50ha", ">50ha"],
    required: true,
  },
  // Main crop
  mainCrop: {
    type: String,
    enum: ["fruits", "legumes", "oilseeds", "industrial", "cereals", "others"],
    required: true,
  },
  // Farming practices
  farmingPractice: {
    type: String,
    enum: ["monoculture", "rotation", "mixed", "agroforestry", "hydroponic"],
    required: true,
  },
  // Irrigation
  irrigation: {
    type: String,
    enum: ["rainfed", "drip", "sprinkler", "surface"],
    required: true,
  },

  // Method
  method: {
    type: String,
    enum: ["organic", "conventional", "integrated", "conservation"],
    required: true,
  },

  // Technology level
  technologyLevel: {
    type: String,
    enum: ["traditional", "semi-mechanized", "mechanized", "precision"],
    required: false,
  },

  // Biology choice (not clear but I'll keep as enum)
  biology: {
    type: String,
    enum: ["aerolic", "submarine", "terrestrial", "others"],
    required: false,
  },

  // Invention level
  inventionLevel: {
    type: String,
    enum: ["basic", "applied", "experimental", "advanced"],
    required: false,
  },
});

module.exports = mongoose.model("Farm", FarmSchema);
