const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controllers.js')
const rolesControllers = require('../controllers/roles.controllers.js')


// USERS ROUTES
router.get('/users/getAllUsers', usersControllers.getAllUsers);

// ROLES ROUTES
router.post('/roles/addRole', rolesControllers.addRole);


module.exports = router;