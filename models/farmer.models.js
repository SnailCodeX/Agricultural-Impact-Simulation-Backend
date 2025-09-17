const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
  farmerName: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  location: { type: String, required: false },
  experience: {
    type: String,
    enum: ["beginner", "intermediate", "experienced", "professional"],
    required: true,
  },
});

module.exports = mongoose.model("Farmer", FarmerSchema);
