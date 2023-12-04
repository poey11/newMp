
import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import  '../Page Style/Post.css';
import {useEffect,useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import MediaComponent from './MediaComponent';



const Postpage = () => {
    const location = useLocation();
    const { state } = location;
    const { id } = state || {}; // eslint-disable-next-line react-hooks/exhaustive-deps
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const [Review, setReview] = useState('');
    const [UserId, setUserId] = useState('');

    useEffect(() => {
       
        const fetchUser= async ()=>{
          
            const response = await fetch("/api/user/"+UserId);
            const json = await response.json()
        
            if(response.ok){
                setUser(json);
              }
              
        }
        const fetchSingleReviews = async () => {
            
            const response = await fetch("/api/reviews/" + id);
            const json = await response.json();

            if (response.ok) {
                setReview(json);
                setUserId(Review.Author)
            } else {
                console.log(json.error);
            }
        };
        fetchSingleReviews();
        fetchUser();
    },[UserId,Review]);

    
    const handleDelete = async (e) => {
        try{
            const response = await fetch('/api/reviews/'+id,{
                method:'DELETE'
            })

            const json = await response.json();

            if (response.ok) {
                alert("Review Deleted");
                navigate(-1);
            }
            if (!response.ok) {
                alert(json.error);
            }
        }
        catch(e){
            alert(e);

        }
    }
    const onEdit= (()=>{
        navigate('/EditReview',{state:{id}})
    })
    const nothelpful = async(e)=>{
        try {
            // Disable the button to prevent multiple click
            const response = await fetch('/api/reviews/untally/' + id, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id, tally: 1 }), // You can adjust the tally value based on your requirement
            });
        
            if (response.ok) {
              // Tally updated successfully, refresh the page
              const button = e.target;
              button.disabled = true;
            } else if (response.status === 404) {
              // Candidate not found, display error message
              console.log('id not found, display error message');
            } else {
              // Display a generic error message
              console.log('Error updating tally. Please try again.');
            }
          } catch (error) {
            console.error('Error updating tally:', error);
          } 
    }

    const helpful = async (e) => {
        try {
          // Disable the button to prevent multiple click
         
          const response = await fetch('/api/reviews/tally/' + id, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, tally: 1 }), // You can adjust the tally value based on your requirement
          });
      
          if (response.ok) {
            // Tally updated successfully, refresh the page
            const button = e.target;
            button.disabled = true;
          } else if (response.status === 404) {
            // Candidate not found, display error message
            console.log('id not found, display error message');
          } else {
            // Display a generic error message
            console.log('Error updating tally. Please try again.');
          }
        } catch (error) {
          console.error('Error updating tally:', error);
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
                <div id='title'>{Review.Title}</div>
                <div id='reviewDate'>{Review.createdAt}</div>
                <div id='agencyUsed'>{Review.Agency}</div>
                <div id='user-rating'>{Review.Rating}</div>
                <a href='/Profile'>
                    <div id='author' >{user.Username}</div>
                    <img   className='profilepic'
                        id='profile-pic'
                        alt=''
                        src={user.Avatar}
                        onError={(e) => {
                            e.target.src = '/avatar-icon.png';
                            e.target.alt = 'Default Avatar';
                        }}
                    />   
                </a>
            
                
            </div>
            <div className="review-paragraph">
                <p> {Review.Body}</p>
            </div>
            <div className="media">
                <MediaComponent url={Review.MediaURL} />
            </div>
            
                
            <div className='icons'>
                <img id='thumbs-up' src='/like-1-1@2x.png'alt=''  />
                <input type='button'id='like' onClick={(e)=>helpful(e)} value={Review.Helpful+" Helpful"}/>
                <img id='thumbs-down'alt='' src='/like-1-1@2x.png' />
                <input type='button' id='dislike'onClick={(e)=>nothelpful(e)} value={Review.NotHelpful+" NotHelpful"}/>
                
            </div>

            <div className="divider" id='postDivider'></div>
            
            <div className='comments-review'>
                <div id='comments'>Owner's Response</div>
            </div>

            <div className='text-box'>
                <label className="textBoxLabel" htmlFor="myTextbox"></label>
                <textarea  id="myTextbox" className="textbox" placeholder="Owner's response ... (This will only be enabled if you are the Owner of the Travel Agency" disabled/>
            </div>

                        
           
            <button className="btn" id="edit-btn" onClick={onEdit}>Edit Review</button>
            
            <button className="btn" id='delete-btn' onClick={handleDelete} >Delete Review</button>
            <button className="btn" id='comment-btn' hidden>Post Response</button>
          

            <div className='footer'/>
           
    </div>
    );
}
 
export default Postpage;
