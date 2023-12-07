const Review = require('../models/Review.js')
const mongoose = require('mongoose')

//create new review
const createReview = async(req, res)=>{
  const{Title, Author, 
    Category,Body,Rating,
    MediaURL,Agency,OwnerReply
    }=req.body;
  
  try{
   
    const review = await Review.create({
          Title, Author, 
          Category,Body,Rating,
          MediaURL,Agency,
          OwnerReply
        });
        res.status(200).json(review);
  }
  catch(e){
    res.status(400).json({e: e.message});
  }
}

//get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({ createdAt: -1 });

    const formattedReviews = reviews.map((review) => ({
      ...review.toObject(),
      createdAt: new Date(review.createdAt).toLocaleDateString('en-US', {
        month: 'long',  // Full month name
        day: 'numeric',  // Day of the month
        year: 'numeric',  // Full year
      }),
    }));

    res.status(200).json(formattedReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//get single reviews
const getReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'id is not valid' });
  }

  try {
    const singleReview = await Review.findById(id);

    if (!singleReview) {
      return res.status(400).json({ error: 'Review does not exist' });
    }

    // Format the createdAt date to "July 21, 2023"
    const formattedDate = singleReview.createdAt.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    // Add the formatted date to the review object
    const formattedReview = {
      ...singleReview._doc,
      createdAt: formattedDate,
    };

    res.status(200).json(formattedReview);
  } catch (error) {
    // Handle any potential errors (e.g., database errors)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateReview = async(req,res) =>{
  const { id } = req.params
    console.log(id)
    const singleReview = await Review.findByIdAndUpdate({_id: id}, {
      Title: req.body.Title,
      Category:req.body.Category,
      Body:req.body.Body,
      Rating:req.body.Rating,
      MediaURL:req.body.MediaURL,
      Agency:req.body.Agency
      
    });
    console.log(singleReview)

    if(!singleReview){
        return res.status(404).json({error: 'Review does not exist'})
      }
      res.status(200).json(singleReview)
}

const delReview= async(req,res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error:'id is not valid'})
  }
  const  singleReview = await Review.findByIdAndDelete({_id: id});

  if(!singleReview){
    return res.status(400).json({error:'Review does not exist'})
  }

  res.status(200).json(singleReview);
}

const tallyHelpful = async (req,res)=>{
  const {id,tally} = req.body

  try{
 
    const review = await Review.findOne({ _id: id });

    if (review) {
      review.Helpful += tally;
           

         await review.save();

        res.json({ success: true, message: 'review updated successfully' });
    } else {
        res.status(404).json({ success: false, message: 'review not found' });
    }
  }
  catch(error){
    console.error('Error updating tally:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

const unTallyHelpful = async (req,res)=>{
  const {id, tally} = req.body

  try{
 
    const review = await Review.findOne({  _id: id  });

    if (review) {
      review.NotHelpful += tally;
           

         await review.save();

        res.json({ success: true, message: 'review updated successfully' });
    } else {
        res.status(404).json({ success: false, message: 'review not found' });
    }
  }
  catch(error){
    console.error('Error updating tally:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

module.exports={
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  delReview,
  unTallyHelpful,
  tallyHelpful
}