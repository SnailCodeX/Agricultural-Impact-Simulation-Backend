const FarmDao = require("../dao/farm.dao");
const farmInstances = new FarmDao();

module.exports = {
  getAllFarms: (req, res, next) => farmInstances.getAllFarms(req, res, next),
};

/*
// controllers/farm.controller.js
const {
    createFarm,
    getAllFarms,
    getFarmById,
    updateFarm,
    deleteFarm
  } = require("../dao/farm.dao");
  
  // Create new farm
  async function addFarm(req, res) {
    try {
      const farm = await createFarm(req.body);
      res.status(201).json(farm);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
      }
      res.status(500).json({ error: "Failed to create farm" });
    }
  }
  
  // Get all farms
  async function fetchFarms(req, res) {
    try {
      const farms = await getAllFarms();
      res.json(farms);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch farms" });
    }
  }
  
  // Get one farm by ID
  async function fetchFarmById(req, res) {
    try {
      const farm = await getFarmById(req.params.id);
      if (!farm) return res.status(404).json({ error: "Farm not found" });
      res.json(farm);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch farm" });
    }
  }
  
  // Update farm
  async function editFarm(req, res) {
    try {
      const farm = await updateFarm(req.params.id, req.body);
      if (!farm) return res.status(404).json({ error: "Farm not found" });
      res.json(farm);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.status(400).json({ error: err.message });
      }
      res.status(500).json({ error: "Failed to update farm" });
    }
  }
  
  // Delete farm
  async function removeFarm(req, res) {
    try {
      const farm = await deleteFarm(req.params.id);
      if (!farm) return res.status(404).json({ error: "Farm not found" });
      res.json({ message: "Farm deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete farm" });
    }
  }
  
  module.exports = {
    addFarm,
    fetchFarms,
    fetchFarmById,
    editFarm,
    removeFarm
  };
  */
