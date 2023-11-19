import Nav from '../Components/NavBar';
import '../Page Style/ProfilepageCSS.css';

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Nav/>
      <div className="header">
        <div className="loginButton">
        </div>

      </div>
      
      <div className="myPosts">My Posts</div>
      <div className="allPosts">All Posts</div>
      
      <img
        className="magnifyGlassIcon"
        alt=""
        src="/magnify-glass@2x.png"
      />

      <div className="profilePageChild" />
      <div className="profilePageItem" />
      <div className="loginButton1">
        <div className="login">FIRST NAME, LAST NAME</div>
      </div>
      
      <div className="login2">LATEST</div>
      <div className="malutoTransportation">MALUTO TRANSPORTATION</div>
      <div className="andTravelCorporation"> AND TRAVEL CORPORATION BY MEHRY</div>
      <div className="usernameBirthdayDescription">
        <p className="usernameBirthday">Username</p>
        <p className="usernameBirthday">&nbsp;</p>
        <p className="usernameBirthday">Birthday</p>
        <p className="usernameBirthday">&nbsp;</p>
        <p className="usernameBirthday">Description</p>
        <img className="user21" alt="" src="/user-2-1@2x.png" />
      </div>

      <img className="user21" alt="" src="/user-2-1@2x.png" />

      <div className="movingForwardPassengersContainer">
        <span>{`Moving `}</span>
        <i className="forward">forward</i>
        <span>{`, Passengers `}</span>
        <i className="forward">
          <span>first</span>
          <span className="span">.</span>
        </i>
      </div>

      <section className="frame1">
        <div className="southBoundRoutesParent">
          <h3 className="southBoundRoutes">South Bound Routes</h3>
          <h3 className="thisIsYourContainer">
            <p
              className="forumpost"
            >{`This is your forum post. Use this space to connect with`}</p>
            <p
              className="forumpost"
            >{`your audience in a way that’s current and interesting. `}</p>
            <p
              className="forumpost"
            >{`Post relevant information that will encourage discussion and `}</p>
            <p className="forumpost">collaboration.....</p>
          </h3>

          <div className="frame1">
            <img className="user211" alt="" src="/user-2-1@2x.png" />
            <h1 className="firstNameLast">First Name Last Name</h1>
          </div>

          <div className="frame2">
            <img className="like11" alt="" src="/like-1-1@2x.png" />
            <div className="frame3">
              <h3 className="like">Like</h3>
              <div className="frame4">
                <img
                  className="comment22"
                  alt=""
                  src="/comment-2-1@2x.png"
                />

                <h3 className="like">Comment</h3>
              </div>
            </div>
          </div>
          <div className="frame5">
            <div className="frame6">
              <div className="div">0</div>
            </div>
            <div className="frame7">
              <div className="div1">0</div>
            </div>
           
            <img
              className="nounEye15457301Icon"
              alt=""
              src="/nouneye1545730-11@2x.png"
            />

            <div className="comment">
              <img
                className="comment22"
                alt=""
                src="/comment-2-1@2x.png"
              />

            </div>
            <div className="divider1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
