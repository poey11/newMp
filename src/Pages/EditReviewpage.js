import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import { useLocation,useNavigate } from 'react-router-dom';
import {useState,useEffect } from 'react';

const EditReviewpage = () => {
    const location = useLocation();
    const { state } = location;
    const { id } = state || {};
    const navigate = useNavigate();
    const [Title, setTitle] = useState('');
    const [Category, setCategory] = useState('');
    const [Body, setBody] = useState('');
    const [Rating, setRating] = useState('');
    const [MediaURL, setMediaURL] = useState('');
    const [Agency, setAgency] = useState('');

    const onEdit= async(e)=>{
      e.preventDefault();    
      
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
        <input className="titleInput" type="text" />

       
        <label htmlFor='ratingInput' className="ratingLabel">Rating: </label>
        <select className="ratingInput" id="ratingInput">
          <option value="Recommended">Recommended</option>
          <option value="Not Recommended">Not Recommended</option>
        </select>
      </div>

      <div className="reviewInputCont2">
          <label htmlFor='tripInput' className="tripLabel">Trip to the: </label>
          <select className="tripInput" id="tripInput">
            <option value="North">North Bound</option>
            <option value="South">South Bound</option>
          </select>

          <div className="agencyLabel">Travel Agency Used: </div>
          <input className="agencyInput" type="text" />
        </div>
        

      <div className='reviewContainer'>
          <textarea className="reviewInput" id="" cols="30" rows="10"placeholder='Write Your Experience...'></textarea>
      </div>
      <div className="mediaCont">
        
        <input type="text" className="mediaInput" id="mediaInput" placeholder='Insert Media URL' />
      </div>
      <div className="buttonContainer">
        <button className='postReviewBut'onClick={onCancel}>Cancel</button>
         <button className='postReviewBut'>Update Review</button>
      </div>
    </form >
    );
}
 
export default EditReviewpage;