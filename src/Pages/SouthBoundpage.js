
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';
import Review from '../Components/ReviewPost.js';
//import { Link } from "react-router-dom"; 
import {useState,useEffect } from 'react';

const SouthBoundPage = () => {
  const Create=()=>{
    return window.location.assign('/CreateReview')
  }
  const [Reviews, setReviews] = useState([])
  const categoryToShow = "South Bound";

  useEffect(()=>{
    const fetchReviews = async () =>{
      const response = await fetch("/api/reviews/");
      const json = await response.json()
  
      if(response.ok){
          setReviews(json);
      }
      else{
        console.log(json.error)
      }
    }
    fetchReviews();
  },[])


  return (
    <div className="southBoundPage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">South-Bound Route</div>
      </div>
      <SubNav/>
      <div className='sort-container'>
        <label htmlFor="Sort" id = "sortLabel" className="SortLabel">South Bound   | Sort By:</label>
        <select className="SortSelect" id="Sort">
          <option value ="Date"> Date</option>
          <option value ="Rate">Ratings</option>
        </select>
      
          <button className='loginButt' id = 'CreateReview' onClick={Create} >Create New Review</button>
      </div>
      <div className='reviews-container'>
        
       {Reviews
      .filter((review) => review.Category === categoryToShow)
      .map((review) => (
          <Review key = {review._id} Agency = {review.Agency} id = {review._id} Title = {review.Title} Author ={review.Author} Date = { review.createdAt} Body={review.Body}/>        

      ))}
      </div>
    </div>
  );
};

export default SouthBoundPage;
