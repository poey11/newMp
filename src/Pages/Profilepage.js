import Nav from '../Components/NavBar';
import SubNavBar from '../Components/SubNavBar';
import '../Page Style/ProfilepageCSS.css';

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">Profile</div>
      </div>
      <SubNavBar/>

      <div className="profilePageChild"/>
      <div className="profilefirstnamelastname">FIRST NAME, LAST NAME</div>
      <div className="malutoTransportation">MALUTO TRANSPORTATION</div>
      <div className="andTravelCorporation">AND TRAVEL CORPORATION BY MEHRY</div>

      <div className="usernameBirthdayDescription">
        <p className="usernameBirthday">Username</p>
        <p className="usernameBirthday">&nbsp;</p>
        <p className="usernameBirthday">Description</p>
      </div>

      <img className="profilepic" alt="" src="/avatar-icon.png" />
      <div className="movingForwardPassengersContainer">
        <span>{`Moving `}</span>
        <i className="forward">forward</i>
        <span>{`, Passengers `}</span>
        <i className="forward">
          <span>first</span>
          <span className="span">.</span>
        </i>
      </div>

      <div classname="latestcontainter"/>
      
      <div className="profilePageItem"> LATEST </div>

    </div>
  );
};

export default ProfilePage;
