const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/*will add images next */
const UserSchema = new Schema({
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
  
    Bio:{
        type: String
    },    
    Roles:{
        type: String
    },
    Avatar:{
        type: String,
        required: true
    }
    
},{timestamps:true})
const User = mongoose.model('User', UserSchema, 'USERS');

module.exports = User;