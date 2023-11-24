const Review = require('../models/Review.js');
const mongoose = require('mongoose');

// Create a new review
const createReview = async (req, res) => {
  const { reviewerName, reviewContent } = req.body;

  try {
    const review = await Review.create({ reviewerName, reviewContent, likes: 0, dislikes: 0, comments: [] });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single review
const getReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'id is not valid' });
  }

  try {
    const singleReview = await Review.findById(id);
    if (!singleReview) {
      return res.status(404).json({ error: 'Review does not exist' });
    }
    res.status(200).json(singleReview);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReview,
};