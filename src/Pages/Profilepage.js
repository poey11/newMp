import Nav from '../Components/NavBar';
import '../Page Style/ProfilepageCSS.css';

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Nav/>
      <div className="header">
        <div className="loginButton"></div>
      </div>

      <div className="pageHeading">
        <div className="profile">Profile</div>
        <div className="divider"/>
      </div>

      <div className="button">
        <div className="searchBar">
          <div className="login">Search</div>
        </div>
      </div>

      <div className="myPosts">My Posts</div>
      <div className="allPosts">All Posts</div>
      <img className="magnifyGlassIcon" alt="" src="/magnify-glass@2x.png"/>
      
      <div className="profilePageChild"/>
      <div className="profilePageItem"/>
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

      <section className="frame">
        <div className="southBoundRoutesParent">
          <h3 className="southBoundRoutes">South Bound Routes</h3>
          <h3 className="thisIsYourContainer">
          <div className="latest">LATEST</div>
            <p className="forumpost">
            This is your forum post. Use this space to connect with
            your audience in a way that’s current and interesting.
            Post relevant information that will encourage discussion and
            collaboration.....</p>
          </h3>
            <img className="latestpic" alt="" src="/user-2-1@2x.png" />
            <h1 className="firstNameLast">First Name Last Name</h1>
            <img className="nounEye15457301Icon"alt=""src="/nouneye1545730-1@2x.png"/>
            <img className="comment22" alt=""src="/comment-2-2@2x.png"/>
            <img className="likepic" alt="" src="/like-1-1@2x.png" />
            <p className="likecomment">Like</p>
            <img className="comment22" alt="" src="/comment-2-2@2x.png"/>
            <p className="likecomment">Comment</p>
          </div>
      </section>
    </div>
  );
};

export default ProfilePage;
