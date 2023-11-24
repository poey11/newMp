const express = require('express');
const router = express.Router();
const {
  createReview,
  getAllReviews,
  getReview,
  likeReview,
  dislikeReview,
  shareReview,
  addComment,
} = require('../controller/ReviewController');

// Get ALL reviews
router.get('/', getAllReviews);

// Get single review
router.get('/:id', getReview);

// Post a review
router.post('/', createReview);

// Like a review
router.post('/:id/like', likeReview);

// Dislike a review
router.post('/:id/dislike', dislikeReview);

// Share a review
router.post('/:id/share', shareReview);

// Add a comment to a review
router.post('/:id/comments', addComment);

module.exports = router;