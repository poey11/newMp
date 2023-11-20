import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import  '../Page Style/Post.css';
const Postpage = () => {
    const iconChange = () =>{

    }
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
                <div id='create'>Trip to Destination</div>
                <a href ='/Profile'>
                    <div id='author'>Author</div>
                    <img id='profile-pic' src='/avatar-icon.png' />
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
                <img id='thumbs-up' src='/like-1-1@2x.png' onClick={iconChange} />
                <a id='like' onClick={iconChange}>Like</a>
                <img id='thumbs-down' src='/like-1-1@2x.png' />
                <a  id='dislike'>Dislike</a>
                
            </div>

            <div className="divider" id='postDivider'></div>
            <div className='comments-review'>
                <div id='comments'>Owner's Response</div>
            </div>

            <div className='text-box'>
                <label for="myTextbox"></label>
                <textarea  id="myTextbox" class="textbox" placeholder="Owner's response ..." disabled/>
            </div>

            <div className='buttons'>
                <button class="edit-btn">Edit Review</button>
                <button class="edit-btn">Delete Review</button>
            </div>
    </div>
    );
}
 
export default Postpage;
