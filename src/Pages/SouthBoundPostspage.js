import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundPostspageCSS.css';

const SouthBoundPosts = () => {

  return (
    <div className="southBoundPosts">
      <Nav/>
      <div className="frame">
        <div className="writeACommentWrapper">
          <div className="writeAComment">Write a comment....</div>
        </div>
      </div>
      <div className="frame1">
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
          <div className="southBoundRoute">South Bound Route Post</div>
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
        <div className="categories">Categories</div>
        <img
          className="magnifyGlassIcon"
          alt=""
          src="/magnify-glass@2x.png"
        />
      </div>
      <div className="frame2">
        <div className="frame3">
          <div className="button1">
            <div className="login">Comment</div>
          </div>
          <div className="button2">
            <div className="login">Edit Post</div>
          </div>
          <div className="edited0d">Edited: 0d</div>
          <div className="firstNameLast">First Name Last Name</div>
          <img className="user21" alt="" src="/user-2-1@2x.png" />
          <div className="southBoundTo">South Bound to Place</div>
        </div>
      </div>
      <div className="frame4">
        <div className="frame5" data-scroll-to="frameContainer">
          <div className="frameParent">
            <div className="frame6">
              <img
                className="nounEye15457301Icon"
                alt=""
                src="/nouneye1545730-11@2x.png"
              />
              <div className="views">0 Views</div>
            </div>
            <div className="frame7">
              <img
                className="comment22"
                alt=""
                src="/comment-2-1@2x.png"
              />
              <div className="comments">0 Comments</div>
            </div>
          </div>
          <div className="like">Like</div>
          <div className="share">Share</div>
          <img className="like11" alt="" src="/like-1-1@2x.png" />
          <div className="thisIsYourContainer">
            <p
              className="thisIsYour"
            >{`This is your forum post. Use this space to connect with your audience in a way `}</p>
            <p
              className="thisIsYour"
            >{`that’s current and interesting. Post relevant information that will encourage `}</p>
            <p
              className="thisIsYour"
            >{`discussion and collaboration. With full freedom to edit posts, as well as add `}</p>
            <p className="thisIsYour">
              stunning media, managing your forum has never been easier.
            </p>
          </div>
          <img className="share1Icon" alt="" src="/share-1@2x.png" />
          <div className="dislike">Dislike</div>
          <img className="like12" alt="" src="/like-1-2@2x.png" />
        </div>
      </div>
      <div className="frame8">
        <div className="frame9">
          <div className="comments0">Comments (0)</div>
          <img className="user22" alt="" src="/user-2-1@2x.png" />
        </div>
      </div>
      <img
        className="dots1Icon"
        alt=""
        src="/dots-1@2x.png"
        onClick="onDots1IconClick"
      />
      <div className="divider1" />
    </div>
  );
};

export default SouthBoundPosts;
