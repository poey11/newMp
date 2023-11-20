const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    Title:{
    
    },
    Dest:{

    },
    Body:{

    },
    Comments:{
        
    }
    
},{timestamps:true})


const Review = mongoose.model('Reviews', ReviewSchema, 'REVIEWS')

module.exports = Review;