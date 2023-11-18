
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';

const SouthBoundPage = () => {
  return (
    <div className="southBoundPage">
      <Nav/>
      <div className="header">
        <div className="malutoTransBy">MALUTO TRANS BY MEHRY</div>
        <div className="home">Home</div>
        <div className="forum">Forum</div>
        <div className="about">About</div>
        <div className="gallery">Gallery</div>
        <div className="review">Review</div>
        <div className="loginButton">
          <div className="login">LOGIN</div>
        </div>
        <img
          className="malutotranslogoIcon"
          alt=""
          src="/malutotranslogo@2x.png"
        />
      </div>
      <div className="pageHeading">
        <div className="southBoundRoute">South-Bound Route</div>
        <div className="divider" />
      </div>
      <div className="home1">Home</div>
      <div className="button">
        <div className="searchBar">
          <div className="login">Search</div>
        </div>
      </div>
      <div className="myPosts">My Posts</div>
      <div className="allPosts">All Posts</div>
      <img
        className="magnifyGlassIcon"
        alt=""
        src="/magnify-glass@2x.png"
      />
      <div className="button1">
        <div className="login">Create New Post</div>
      </div>
      <div className="frame">
        <h3 className="sortByRecent">South Bound Route |</h3>
      </div>
      <div className="frame1">
        <h3 className="sortByRecent">Sort By: Recent Activity</h3>
      </div>
      <img className="southBoundPageChild" alt="" src="/arrow-2.svg" />
      <div className="moreActionsParent">
        <h3 className="moreActions">More Actions</h3>
        <img className="frameChild" alt="" src="/arrow-1.svg" />
      </div>
      <section className="frame2">
        <div className="southBoundRoutesParent">
          <h3 className="southBoundRoutes">South Bound Routes</h3>
          <h3 className="thisIsYourContainer">
            <p
              className="thisIsYour"
            >{`This is your forum post. Use this space to connect with `}</p>
            <p
              className="thisIsYour"
            >{`your audience in a way that’s current and interesting. `}</p>
            <p
              className="thisIsYour"
            >{`Post relevant information that will encourage discussion and `}</p>
            <p className="thisIsYour">collaboration.....</p>
          </h3>
          <div className="frame3">
            <img className="user21" alt="" src="/user-2-1@2x.png" />
            <h1 className="firstNameLast">First Name Last Name</h1>
          </div>
          <div className="frame4">
            <img className="like11" alt="" src="/like-1-1@2x.png" />
            <div className="frame5">
              <h3 className="sortByRecent">Like</h3>
              <div className="frame6">
                <img
                  className="comment22"
                  alt=""
                  src="/comment-2-1@2x.png"
                />
                <h3 className="sortByRecent">Comment</h3>
              </div>
            </div>
          </div>
          <div className="frame7">
            <div className="frame8">
              <div className="div">0</div>
            </div>
            <div className="frame9">
              <div className="div1">0</div>
            </div>
            <img
              className="nounEye15457301Icon"
              alt=""
              src="/nouneye1545730-11@2x.png"
            />
            <div className="frame10">
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

export default SouthBoundPage;
