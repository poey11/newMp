const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
/*will add images next */
const UserSchema = new Schema({
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true,
        select: false
    },
  
    Bio:{
        type: String
    },    
    Roles:{
        type: String
    },
    Avatar:{
        type: String,
    }
    
},{timestamps:true})
UserSchema.pre('save', async function(next){
    if(!this.isModified('Password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
})

const User = mongoose.model('User', UserSchema, 'USERS');

module.exports = User;