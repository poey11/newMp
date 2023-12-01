import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import  '../Page Style/Post.css';
import { Link } from "react-router-dom"; 

const Postpage = () => {
    const iconChange = (thumbId) => {
        const thumbImage = document.getElementById(thumbId);
    
        // Check if the current source is the filled thumbs image
        if (thumbImage.src.includes('/filled_thumbsup.png')) {
            // If it is, revert to the default thumbs image
            thumbImage.src = '/like-1-1@2x.png';
        } else {
            // If it's not, set the filled thumbs image
            thumbImage.src = '/filled_thumbsup.png';
        }
    };
    

 
    return ( 
        <div className="PostPageContainer">
        <NavBar/>
        <div className="page-header">
            <div className="page-title">Review</div>
        </div>            
        <SubNav/>

        <div className='review-name'>
                <div id='title'>Title</div>
                <div id='reviewDate'>Date</div>
                <div id='agencyUsed'>Agency</div>
                <div id='user-rating'>Recommended</div>
                <a href ='/Profile'>
                    <div id='author'>Author</div>
                    <img id='profile-pic' src='/avatar-icon.png' alt=''/>
                </a>

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
                <img id='thumbs-up' src='/like-1-1@2x.png'alt='' onClick={ () => iconChange} />
                <label htmlFor='thumbs-up' id='like' onClick={ () =>iconChange}>Helpful</label>
                <img id='thumbs-down'alt='' src='/like-1-1@2x.png' />
                <label htmlFor='thumbs-down' id='dislike'>Not Helpful</label>
                
            </div>

            <div className="divider" id='postDivider'></div>
            <div className='comments-review'>
                <div id='comments'>Owner's Response</div>
            </div>

            <div className='text-box'>
                <label for="myTextbox"></label>
                <textarea  id="myTextbox" class="textbox" placeholder="Owner's response ..." disabled/>
            </div>

    
            <Link to = "/EditReview">
                <button class="btn" id="edit-btn"> <a href='/EditReview'>Edit Review</a></button>
            </Link>
            <button class="btn" id='delete-btn'>Delete Review</button>
            <button class="btn" id='comment-btn'>Post Comment</button>

            <div className='footer'/>
            
    </div>
    );
}
 
export default Postpage;
