const User = require('../models/User.js')
const mongoose = require('mongoose')

//create new user
const createUser = async (req,res) => {
    const {Username,Password,Bio,Status} = req.body
    
    try{
        const user  = await User.create({Username,Password,Bio,Status})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

//get all user
const GetAllUser  = async (req, res) =>{
    const Users = await User.find({}).sort({createdAt:-1})

    res.status(200).json(Users)
}

// get single user
const GetUser = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'id is not valid'})
    }

    const singleUser = await User.findById(id)

    if(!singleUser){
      return res.status(404).json({error: 'User does not exist'})
    }

    res.status(200).json(singleUser)
}


//update / edit user info 
const updateUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'id is not valid'})
    }

    const singleUser = await User.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!singleUser){
        return res.status(404).json({error: 'User does not exist'})
      }
  
      res.status(200).json(singleUser)
}
module.exports ={
    createUser,
    GetAllUser,
    GetUser,
    updateUser
}