const router = require('express').Router();

const user = require('../controllers/user');



router.get('/getAllUsers',  user.getAllUsers);
//  verifyMD.verifyUserName,
//user apis
router.post('/registerUser', user.registerUser);



// ל admin:
// createAdmin, loginAdmin, deleteUser, updateAdmin
// ל user:

// createUser, loginUser, updateUser, getAllUsers, getUserById
// ל weather: 
// createWeather, deleteWeather, getWeathersByUserId, getWeather

module.exports = router;