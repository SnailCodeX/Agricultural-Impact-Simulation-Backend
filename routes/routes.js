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
router.post('/users/createUser', usersControllers.createUser);
router.post('/users/login', usersControllers.login);

// ROLES ROUTES
router.post('/roles/addRole', rolesControllers.addRole);

// FARM ROUTES
router.get('/farm/getAllFarms', farmControllers.getAllFarms);
router.post('/farm/insertData', farmControllers.insertData);
router.get('/farm/getFarmById', farmControllers.getFarmById);

// FARMER ROUTES
router.get('/farmer/getAllFarmers', farmerControllers.getAllFarmers);
router.get('/farmer/getFarmerById', farmerControllers.getFarmerById);

// SOIL ROUTES
router.get('/soil/getAllSoils', soilControllers.getAllSoils);
router.get('/soil/getSoilById', soilControllers.getSoilById);

// CLIMATE ROUTES
router.get('/climate/getAllClimate', climateControllers.getAllClimate);

module.exports = router;
