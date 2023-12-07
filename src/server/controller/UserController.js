const User = require('../models/User.js')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

//create new user
const createUser = async (req, res) => {
    const { Username, Password, Bio, Roles, Avatar } = req.body;

    try {
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ Username });

        if (existingUser) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        // If the username is not found, create the new user
        const user = await User.create({ Username, Password, Bio, Roles, Avatar });
       
        res.status(200).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
};

//get all user
const GetAllUser = async (req, res) => {
    try {
        const Users = await User.find({}).sort({ createdAt: -1 });
        // Set Content-Type header to application/json (optional)
        res.header('Content-Type', 'application/json');
        res.status(200).json(Users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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
        Username: req.body.newUserName,
        Bio: req.body.newBio,
        Avatar: req.body.newAvatar,
    });

    if(!singleUser){
        return res.status(404).json({error: 'User does not exist'})
      }
      res.status(200).json(singleUser)
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ Username: username }).select('+Password');
        if (!user) {
            return res.status(401).json({ error: 'User doesnt exist' });
        }

        const passwordMatch = await bcrypt.compare(password, user.Password);
        if (passwordMatch === true) {
            //Successful login
            if (!req.session) {
                req.session = {};
            }
            if (req.session.authenticated) {
                req.session.userId = user._id.toString();
              
            }
            else {
                req.session.authenticated = true;
                req.session.userId = user._id;
            }
            return res.status(201).json({message:'Login Success'});
        } else {
            // Incorrect password
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
      res.status(501).json({error:"Internal Server Error",})
    }
};


//logout
const userLogout = async(req,res) =>{
    console.log(req.session)
    req.session.destroy((err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'error' });
        }
        res.status(200).json({ message: 'Logout successful' });
      });
}





module.exports ={
    createUser,
    GetAllUser,
    GetUser,
    updateUser,
    loginUser,
    userLogout
}