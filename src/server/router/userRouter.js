const express = require('express')
const router = express.Router()
const { createUser,
    GetAllUser,
    GetUser,
    updateUser,
    loginUser,
} = require('../controller/UserController')

// get ALL user info
router.get('/',GetAllUser)

//Get single user info 
router.get('/:id',GetUser)

//post a user
router.post('/', createUser)

//update/edit user
router.patch('/:id',updateUser)

//login valid
router.post('/login', loginUser);

//logout

module.exports = router