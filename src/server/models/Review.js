const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    commenterName: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

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
  Likes: {
    type: Number,
    default: 0,
  },
  Shares: {
    type: Number,
    default: 0,
  },
  Comments: [CommentSchema],
}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema, 'REVIEWS');

module.exports = Review;