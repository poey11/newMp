import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import { useLocation,useNavigate } from 'react-router-dom';
import {useState,useEffect } from 'react';

const EditReviewpage = () => {
    const location = useLocation();
    const { state } = location;
    const { id } = state || {};//review id
    const navigate = useNavigate();
    var tempTitle;
    var tempCat
    var tempBody
    var tempRating
    var tempUrl
    var tempAgency
    const [Title, setTitle] = useState(tempTitle);
    const [Category, setCategory] = useState(tempCat);
    const [Body, setBody] = useState(tempBody);
    const [Rating, setRating] = useState(tempRating);
    const [MediaURL, setMediaURL] = useState(tempUrl);
    const [Agency, setAgency] = useState(tempAgency);

    const onEdit= async(e)=>{
      e.preventDefault();   
      if(Rating === "" && Category === ""){
        setRating("Recommended");
        setCategory("North Bound")
      } 
      
      const review = {Title,Category,Body,Rating,MediaURL,Agency}
      const response = await fetch("/api/reviews/"+id,{
        method:"PATCH",
        body:  JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json'
      }
      });
      const json = await response.json()

      if (!response.ok) {
      }
      else
      {
          alert("Review Updated Successfully");
          navigate(-1);
      }
      
    }
    const onCancel = ()=>{
      navigate(-1)
    }





    return (  
    <form className="EditReviewCont" onSubmit={onEdit}>
      <NavBar />
      <div className="page-header">
        <div className="page-title">Edit Review</div>
      </div>
      <SubNav />
      <div className="CreateReviewHeader">
        <div className="paraHeader">
          Edit your review about the travel agency trip you used!
        </div>
      </div>
      <div className="divider" id="CreateReviewDivider"/>
      <div className="reviewInputCont">
        <div className="titleLabel">Review Title: </div>
        <input className="titleInput" id="titleInput" type="text" onChange={(e)=> setTitle(e.target.value)} value={Title} />
       
        <label htmlFor='ratingInput' className="ratingLabel">Rating: </label>
        <select className="ratingInput" id="ratingInput" onChange={(e)=> setRating(e.target.value)} value={Rating}>
          <option value="Recommended">Recommended</option>
          <option value="Not Recommended">Not Recommended</option>
        </select>
      </div>

      <div className="reviewInputCont2">
          <label htmlFor='tripInput' className="tripLabel">Trip to the: </label>
          <select className="tripInput" id="tripInput" onChange={(e)=> setCategory(e.target.value)} value={Category}>
            <option value="North">North Bound</option>
            <option value="South">South Bound</option>
          </select>

          <div className="agencyLabel">Travel Agency Used: </div>
          <input className="agencyInput" id= "agencyInput"type="text"  onChange={(e)=> setAgency(e.target.value)} value={Agency}/>
        </div>
        

      <div className='reviewContainer'>
        <textarea className="reviewInput" id="reviewInput" cols="30" rows="10"placeholder='Write Your Review...' onChange={(e)=> setBody(e.target.value)} value={Body} />
      </div>
      <div className="mediaCont">
  
        <input type="text" className="mediaInput" id="mediaInput" placeholder='Insert Media URL (Videos can only be YT links)' onChange={(e)=> setMediaURL(e.target.value)} value={MediaURL} />
      </div>
      <div className="buttonContainer">
        <button className='postReviewBut'onClick={onCancel}>Cancel</button>
         <button className='postReviewBut'>Update Review</button>
      </div>
    </form >
    );
}
 
export default EditReviewpage;