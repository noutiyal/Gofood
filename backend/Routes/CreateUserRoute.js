const express = require('express');
const router = express.Router();
const userController = require('../controler/Usercontrole');
const { body } = require('express-validator');

router.post("/CreateUser",
    body("email").isEmail(),
    body('name').isLength({ min: 4 }),
    body('password', "must be length<6").isLength({ min: 5 }), // Corrected field name
    userController.usersignup // Corrected the controller function
);
router.post("/findemail", userController.emailexist)
router.post("/loginUser", userController.loginUser)
router.post("/loginUser", userController.forgetpassword)



module.exports = router;
