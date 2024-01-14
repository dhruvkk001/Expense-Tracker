const express = require('express')
const { loginController, registerController } = require('../controllers/userControllers')

//router object 
const router = express.Router()

// routes
//post || login

router.post('/login', loginController)


//post || register

router.post('/register', registerController)

module.exports = router
