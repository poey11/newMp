import Nav from '../Components/NavBar';
import SubNavBar from '../Components/SubNavBar';
import '../Page Style/ProfilepageCSS.css';
import LatestPost from '../Components/LatestPost.js';

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Nav/>
      <div className="header">

      </div>

      <div className="page-header">
          <div className="page-title">Profile</div>
      </div>
      <SubNavBar/>

      <div class="container" id = "latestpost">
             <h1 class="contTitle">Latest Post</h1>
                <p class="contDesc">
                    Describe your journey to the North or South. Engage your audience 
                    and entice them to continue reading...
                </p>
        </div>

      <div className="profilePageChild"/>
      <div className="profilefirstnamelastname">FIRST NAME, LAST NAME</div>
      <div className="malutoTransportation">MALUTO TRANSPORTATION</div>
      <div className="andTravelCorporation">AND TRAVEL CORPORATION BY MEHRY</div>

      <div className="usernameBirthdayDescription">
        <p className="usernameBirthday">Username</p>
        <p className="usernameBirthday">&nbsp;</p>
        <p className="usernameBirthday">Birthday</p>
        <p className="usernameBirthday">&nbsp;</p>
        <p className="usernameBirthday">Description</p>
      </div>

      <img className="profilepic" alt="" src="/user-2-1@2x.png" />
      <div className="movingForwardPassengersContainer">
        <span>{`Moving `}</span>
        <i className="forward">forward</i>
        <span>{`, Passengers `}</span>
        <i className="forward">
          <span>first</span>
          <span className="span">.</span>
        </i>
      </div>

      
      <div className="profilePageItem"> LATEST </div>

< Link className='containerClick' to='/LatestPost'>
                <LatestPost/>
            </Link>


    </div>
  );
};

export default ProfilePage;
