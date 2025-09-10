// dao/farm.dao.js
const Farm = require("../models/farm.model");

// Create a new farm
async function createFarm(farmData) {
  return Farm.create(farmData);
}

// Get all farms
async function getAllFarms() {
  return Farm.find({});
}

// Get a single farm by ID
async function getFarmById(id) {
  return Farm.findById(id);
}

// Update farm by ID
async function updateFarm(id, updateData) {
  return Farm.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
}

// Delete farm by ID
async function deleteFarm(id) {
  return Farm.findByIdAndDelete(id);
}

module.exports = {
  createFarm,
  getAllFarms,
  getFarmById,
  updateFarm,
  deleteFarm
};
