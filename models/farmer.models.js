// models/farm.model.js
const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
  farmName: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  location: { type: String, required: false },
  // User farming experience
  experience: {
    type: String,
    enum: ["beginner", "intermediate", "experienced", "professional"],
    required: true,
  },
});

module.exports = mongoose.model("Farmer", FarmerSchema);
