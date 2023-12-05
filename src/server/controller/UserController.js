const User = require('../models/User.js')
const mongoose = require('mongoose')

//create new user
const createUser = async (req,res) => {
    const {Username,Password,Bio,Roles,Avatar} = req.body
    console.log(req)
    console.log(req.params)
    try{
        const user  = await User.create({Username,Password,Bio,Roles,Avatar})
        res.status(200).json(user)
    }
    catch(error){
        console.log({error: error.message})
        res.status(400).json({error: error.message})
    }

}

//get all user
const GetAllUser = async (req, res) => {
    try {
        const Users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(Users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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
        Username: req.body.newUserName,
        Bio: req.body.newBio,
        Avatar: req.body.newAvatar,
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