const express = require('express')
const router = express.Router()
const { createUser,
    GetAllUser,
    GetUser,
} = require('../controller/UserController')

// get ALL user info
router.get('/',GetAllUser)

//Get single user info 
router.get('/:id',GetUser)

//post a user
router.post('/', createUser)


//update/edit user
router.patch('/:id')

// delete review
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'delete review'})
})

module.exports = router