import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import '../Page Style/CreateReviewpageCSS.css';

const CreateReviewpage = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
  }, []);

  const handleLike = async () => {
    console.log('Liked');
  };

  const handleDislike = async () => {
    console.log('Disliked');
  };

  const handleShare = async () => {
    console.log('Shared');
  };

  const handleAddComment = async () => {
    console.log('Commented:', commentText);
    setCommentText('');
  };

  return (
    <div className="CreateReviewCont">
      <NavBar />
      <div className="page-header">
        <div className="page-title">Create Review</div>
      </div>
      <SubNav />

      <div className="review-name">
        <div id="name">First Name Last Name</div>
        <div id="create">Create a Review</div>
      </div>

      <div className="review-paragraph">
        <p>
          This is your review space. Utilize this platform to engage with your audience in a manner
          that's insightful and captivating. Share pertinent details that inspire thoughtful
          reviews and foster a sense of community. With the flexibility to edit and enhance your
          reviews, along with the ability to include compelling media, creating and managing your
          review page has never been more seamless.
        </p>
      </div>

      <div className="icons">
        <button onClick={handleLike} id="like">
          Like
        </button>
        <button onClick={handleDislike} id="dislike">
          Dislike
        </button>
        <button onClick={handleShare} id="share">
          Share
        </button>
      </div>

      <div className="divider"></div>

      <div className="comments-review">
        <div id="comments">Comments</div>
      </div>

      <div className="text-box">
        <label htmlFor="myTextbox"></label>
        <input
          type="text"
          id="myTextbox"
          className="textbox"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button className="comment-btn" onClick={handleAddComment}>
          Comment
        </button>
        <button className="edit-btn">Edit Post</button>
      </div>
    </div>
  );
};

export default CreateReviewpage;
