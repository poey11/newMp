const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    Title:{
        type: String,
        required: true
    },
    User_name:{
        type: String ,
        required: true
    },
    Route:{
        type: String,
        required: true
    },
    Body:{
        type: String,
        required: true
    },
    Media:{
        type: String,
        required: true
    }
    
},{timestamps:true})


const Review = mongoose.model('Reviews', ReviewSchema, 'REVIEWS')

module.exports = Review;