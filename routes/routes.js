const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controllers.js')
const rolesControllers = require('../controllers/roles.controllers.js')
const farmControllers = require('../controllers/farm.controllers.js')
const farmerControllers = require('../controllers/farmer.controllers.js')
const soilControllers = require('../controllers/soil.controllers.js')
const climateControllers = require('../controllers/climate.controllers.js')

// USERS ROUTES
router.get('/users/getAllUsers', usersControllers.getAllUsers);

// ROLES ROUTES
router.post('/roles/addRole', rolesControllers.addRole);

// FARM ROUTES
router.get('/farm/getAllFarms', farmControllers.getAllFarms);
router.get('/farm/getDropdowns', farmControllers.getDropdowns);

router.get("/dropdowns", getDropdowns);

// FARMER ROUTES
router.get('/users/getAllFarmers', farmerControllers.getAllFarmers);

// SOIL ROUTES
router.get('/users/getAllSoils', soilControllers.getAllSoils);

// CLIMATE ROUTES
router.get('/users/getAllClimate', climateControllers.getAllClimate);

module.exports = router;
