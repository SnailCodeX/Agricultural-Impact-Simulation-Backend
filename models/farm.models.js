const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
  farmSize: {
    type: String,
    enum: ["<5ha", "5-20ha", "20-50ha", ">50ha"],
    required: true,
  },
  mainCrop: {
    type: String,
    enum: ["fruits", "legumes", "oilseeds", "industrial", "cereals", "others"],
    required: true,
  },
  farmingPractice: {
    type: String,
    enum: ["monoculture", "rotation", "mixed", "agroforestry", "hydroponic"],
    required: true,
  },
  irrigation: {
    type: String,
    enum: ["rainfed", "drip", "sprinkler", "surface"],
    required: true,
  },

  method: {
    type: String,
    enum: ["organic", "conventional", "integrated", "conservation"],
    required: true,
  },

  technologyLevel: {
    type: String,
    enum: ["traditional", "semi-mechanized", "mechanized", "precision"],
    required: false,
  },

  biology: {
    type: String,
    enum: ["aerolic", "submarine", "terrestrial", "others"],
    required: false,
  },

  inventionLevel: {
    type: String,
    enum: ["basic", "applied", "experimental", "advanced"],
    required: false,
  },
});

module.exports = mongoose.model("Farm", FarmSchema);