
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';
import Review from '../Components/ReviewPost.js';
import { useNavigate } from "react-router-dom";
import {useState,useEffect } from 'react';



const NorthBoundpage = () => {
  const Navigate = useNavigate();
  const [Reviews, setReviews] = useState([])
  
  const Create=()=>{
    Navigate("/CreateReview")
  }

   const categoryToShow = "North Bound";

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
    <div className="NorthBoundpage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">North-Bound Route</div>
      </div>
      <SubNav/>
      <div className='sort-container'>
        <label htmlFor="Sort" id = "sortLabel" className="SortLabel">North Bound   | Sort By:</label>
        <select className="SortSelect" id="Sort">
          <option value ="Date"> Date</option>
          <option value ="Rate">Ratings</option>
        </select>
        <button className='loginButt' id = 'CreateReview' onClick={Create}>Create New Review</button>
      </div>
      <div className='reviews-container'>
       
      {Reviews
      .filter((review) => review.Category === categoryToShow)
      .map((review) => (
          <Review key = {review._id} Agency = {review.Agency} id = {review._id} Title = {review.Title} AuthorId ={review.Author} Date = { review.createdAt} Body={review.Body}/>        

      ))}
          
      </div>
    </div>
  );
};

export default NorthBoundpage;
