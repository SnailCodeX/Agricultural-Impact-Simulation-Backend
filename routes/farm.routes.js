const express = require("express");
const {
  fetchFarms,
  fetchFarmById,
  addFarm,
  updateFarmById,
  deleteFarmById
} = require("../controllers/farm.controller");

const router = express.Router();

// CRUD
router.get("/", fetchFarms);
router.get("/:id", fetchFarmById);
router.post("/", addFarm);
router.put("/:id", updateFarmById);
router.delete("/:id", deleteFarmById);

module.exports = router;
