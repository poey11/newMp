const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Dest: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
  Rating: {
   type:String,
  },
  MediaURL:{
    type:String
  },
  Helpful: {
    type: Number,
    default: 0,
  },
  NotHelpful: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema, 'REVIEWS');

module.exports = Review;