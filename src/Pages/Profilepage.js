import Nav from '../Components/NavBar';
import SubNavBar from '../Components/SubNavBar';
import '../Page Style/ProfilepageCSS.css';
import Review from '../Components/ReviewPost.js';
import { Link } from "react-router-dom";
import {useState,useEffect } from 'react';

const ProfilePage = () => {
  const [users, setUsers] = useState([]);
 
  const fetchUsers= async ()=>{
    
    const response = await fetch("/api/user/");
    const json = await response.json()

    if(response.ok){
        setUsers(json);
      }
      
  }

  useEffect(()=>{
    fetchUsers()
  },[]);


  

  return (
    
    <div className="profilePage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">Profile</div>
      </div>
      <SubNavBar/>
      <Link to ='/EditProfile'>
        <button className="editProfileButton">Edit Profile</button>
      </Link>
     
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="malutoTransportation">MALUTO TRANSPORTATION</div>
          <div className="andTravelCorporation">AND TRAVEL CORPORATION BY MEHRY</div>
        </div>
        <div className="userInfoContainer">
        {users.map((data, index) => {
          if (index === users.length - 1) {
            const primaryUrl = data.Avatar;
            return (
              <img key={data._id} className="profilepic" alt="Url not Valid" src={primaryUrl} onError={(e) => { e.target.src = '/avatar-icon.png'; }}/>
            );
          } else {
            return null;
          }
        })}
        <div className="usernameContainer">
          {users.map((data,index)=>{
            if(index === users.length-1){
              return(
                <p key={data._id}>{data.Username}</p>
                
              )  
            }
            else{
              return null;
            }
          })}
          </div>      
          {users.map((data,index)=>{
            if(index === users.length-1){
              return(
                <textarea key={data._id} id="userDescription" cols="30" rows="10" className="userDescription" placeholder={data.Bio} disabled/>
        
                
              )  
            } else{
              return null;
            }
          })}
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
        <Link className='containerClick' to = '/Post'>
            <Review/>
        </Link>
        
          
      </div>
    </div>
  );
};

export default ProfilePage;
