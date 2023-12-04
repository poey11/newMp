const express = require('express')
const router = express.Router()
const {  createReview,
  getAllReviews,
  getReview,
  updateReview,
  delReview,
  unTallyHelpful,
  tallyHelpful
} = require('../controller/ReviewController')

//get all in
router.get('/',getAllReviews)

//Get single review info 
router.get('/:id',getReview)

//create new review
router.post('/', createReview)

//update/edit review
router.patch('/:id',updateReview)

//delete review
router.delete('/:id',delReview)

// to increase helpfull
router.post('/tally/:id', tallyHelpful)

// to increate nothelpful
router.post('/untally/:id',unTallyHelpful)

module.exports = router