import Nav from '../Components/NavBar';
import SubNavBar from '../Components/SubNavBar';
import '../Page Style/ProfilepageCSS.css';
import Review from '../Components/ReviewPost.js';
import { useLocation,useNavigate } from "react-router-dom";
import {useState,useEffect } from 'react';

const OtherProfilepage = () => {
  const [users, setUsers] = useState('');
  const [Reviews, setReviews] = useState([])
  const [id, setId] = useState('');
  const Navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { AuthorId } = state || {};
  useEffect(()=>{
    const fetchUser= async ()=>{
    
      const response = await fetch("/api/user/"+AuthorId);
      const json = await response.json()
  
      if(response.ok){
          setUsers(json);
        }
        
    }

    const fetchReviews = async () =>{
      const response2 = await fetch("/api/reviews/");
      const json2 = await response2.json()
  
      if(response2.ok){
          setReviews(json2);
      }
      else{
        console.log(json2.error)
      }
    }
    fetchReviews();
    fetchUser()
   
},[id]);


  

  return (
    
    <div className="profilePage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">Profile</div>
      </div>
      <SubNavBar/>
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="malutoTransportation">MALUTO TRANSPORTATION</div>
          <div className="andTravelCorporation">AND TRAVEL CORPORATION BY MEHRY</div>
        </div>
        <div className="userInfoContainer">
       
          <img  className="profilepic" alt="Url not Valid" src={users.Avatar} onError={(e) => { e.target.src = '/avatar-icon.png'; }}/>
          
          
  
        <div className="usernameContainer">
          
             
            <p>{users.Username}</p>
                
              
          
          </div>      
         
          <textarea id="userDescription" cols="30" rows="10" className="userDescription" placeholder={users.Bio} disabled/>
            
          
        
          </div>

        <div className="profileFooterContainer">
          <span>{`Moving `}</span>
          <i className="forward">forward</i>
          <span>{`, Passengers `}</span>
          <i className="forward">
            <span>first</span>
            <span className="span">.</span>
          </i>
        </div>

      </div>

      
      <div className="lastestHeader"> Lastest Reviews</div>
      <div className="latestContainer">
        {Reviews
       .filter((review) => review.Author === AuthorId)
       .map((review) => (
            <Review key = {review._id} Agency = {review.Agency} id = {review._id} Title = {review.Title} AuthorId ={AuthorId} Date = { review.createdAt} Body={review.Body}/>       
        ))}
        
      </div>
    </div>
  );
};

export default OtherProfilepage;
