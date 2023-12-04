const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  AgencyName:{
    type:String
  },
  AgencyOwner:{
    type:String
  },
}, { timestamps: true });

const Review = mongoose.model('Agency', AgencySchema, 'AGENCY');

module.exports = Review;