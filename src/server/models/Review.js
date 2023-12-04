const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  Title: {
    type: String,
  },
  Author: {
    type: String,
  },
  Category: {
    type: String,
    default:"North Bound"
  },
  Body: {
    type: String,
  },
  Rating: {
   type:String,
  },
  MediaURL:{
    type:String
  },
  Agency:{
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
  OwnerReply:{
    type:String,
   
  }
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema, 'REVIEWS');

module.exports = Review;