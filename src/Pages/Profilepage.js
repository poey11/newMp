import Nav from '../Components/NavBar';
import SubNavBar from '../Components/SubNavBar';
import '../Page Style/ProfilepageCSS.css';
import Review from '../Components/ReviewPost.js';
import { Link } from "react-router-dom";
const ProfilePage = () => {
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
        <img className="profilepic" alt="" src="/avatar-icon.png" />
          <div className="usernameContainer">
            <p className="">Username</p>
          </div>        
          <textarea  id="userDescription" cols="30" rows="10" className="userDescription" placeholder="User's Description" disabled/>
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
