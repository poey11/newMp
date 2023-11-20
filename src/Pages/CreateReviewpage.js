import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import '../Page Style/CreateReviewpageCSS.css';

const CreateReviewpage = () => {
    return (  
        <div className="CreateReviewCont">
            <NavBar/>
            <div className="page-header">
                <div className="page-title">Create Review</div>
            </div>            
            <SubNav/>

            <div className='review-name'>
                <div id='name'>First Name Last Name</div>
                <div id='create'>Create a Review</div>
            </div>

            <div className="review-paragraph">
                <p>This is your review space. Utilize this platform to engage with your audience in a 
                    manner that's insightful and captivating. Share pertinent details that inspire thoughtful 
                    reviews and foster a sense of community. With the flexibility to edit and enhance your 
                    reviews, along with the ability to include compelling media, creating and managing your 
                    review page has never been more seamless.
                </p>
            </div>

            <div className='icons'>
                <a href='' id='like'>Like</a>
                <a href='' id='dislike'>Dislike</a>
                <a href='' id='share'>Share</a>
            </div>

            <div className="divider"></div>

            <div className='comments-review'>
                <div id='comments'>Comments</div>
            </div>

            <div className='text-box'>
                <label for="myTextbox"></label>
                <input type="text" id="myTextbox" class="textbox" placeholder="Write a comment..."></input>
            </div>

            <div className='buttons'>
                <button class="comment-btn">Comment</button>
                <button class="edit-btn">Edit Post</button>
            </div>

        </div>
    );
}
 
export default CreateReviewpage;