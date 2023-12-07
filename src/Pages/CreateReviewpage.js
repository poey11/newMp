
import { useState,useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import '../Page Style/CreateReviewpageCSS.css';

const CreateReviewpage = () => {
  
  const [Title, setTitle] = useState('');
  const OwnerReply = "";
  const [Category, setCategory] = useState('');
  const [Body, setBody] = useState('');
  const [Rating, setRating] = useState('');
  const [MediaURL, setMediaURL] = useState('');
  const [Agency, setAgency] = useState('');
  const navigate = useNavigate();
  const [id, setId] = useState('');
  
  useEffect(() => {
    const fetchUserId = async () => {
      try {
          const response = await fetch("/api/session/sessionUserId");
          const json = await response.json();
          if (response.ok) {
              // Session exists, check authentication status
              setId(json)
          } else {
              // Session doesn't exist
              alert("You are not Logged in")
              navigate("/Login");
            }

      } catch (error) {
          // Handle fetch error
          console.error("Error fetching authentication status:", error);
          setId(false);
      }
    
    };
    fetchUserId()
  },[])

  if(Rating === "" && Category === ""){
    setRating("Recommended");
    setCategory("North Bound")
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const Author=id;
    const review = {Title,Author,Category,Body,Rating,MediaURL,Agency,OwnerReply}
  


    const response = await fetch('/api/reviews/',{
      method:'POST',
      body: JSON.stringify(review),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()
    if(!response.ok){
        console.log(json.error)
    }
    if(response.ok){
      alert("Review Created")
      setTitle('')
      setCategory('')
      setBody('')
      setRating('')
      setMediaURL('')
      setAgency('')
      navigate(-1);
    }
  }
  const onCancel = ()=>{
    navigate(-1)
  }

  return (
    <form className="CreateReviewCont" onSubmit={handleSubmit}>
      <NavBar />
      <div className="page-header">
        <div className="page-title">Create Review</div>
      </div>
      <SubNav />
      <div className="CreateReviewHeader">
        <div className="paraHeader">
          Create a review about the travel agency you used!
        </div>
      </div>
      <div className="divider" id="CreateReviewDivider"/>
      <div className="reviewInputCont">
        <div className="titleLabel">Review Title: </div>
        <input className="titleInput" id="titleInput" type="text" onChange={(e)=> setTitle(e.target.value)} value={Title} required/>

       
        <label htmlFor='ratingInput' className="ratingLabel">Rating: </label>
        <select className="ratingInput" id="ratingInput" onChange={(e)=> setRating(e.target.value)} value={Rating}>
          <option value="Recommended">Recommended</option>
          <option value="Not Recommended">Not Recommended</option>
        </select>
      </div>

      <div className="reviewInputCont2">
          <label htmlFor='tripInput' className="tripLabel">Trip to the: </label>
          <select className="tripInput" id="tripInput" onChange={(e)=> setCategory(e.target.value)} value={Category}>
            <option value="North Bound">North Bound</option>
            <option value="South Bound">South Bound</option>
          </select>

          <div className="agencyLabel">Travel Agency Used: </div>
          <input className="agencyInput" id= "agencyInput"type="text"  onChange={(e)=> setAgency(e.target.value)} value={Agency}required/>
        </div>
        

      <div className='reviewContainer'>
          <textarea className="reviewInput" id="reviewInput" cols="30" rows="10"placeholder='Write Your Review...' onChange={(e)=> setBody(e.target.value)} value={Body} required/>
      </div>
      <div className="mediaCont">
        
        <input type="text" className="mediaInput" id="mediaInput" placeholder='Insert Media URL (Videos can only be YT links)' onChange={(e)=> setMediaURL(e.target.value)} value={MediaURL} />
      </div>
      <div className="buttonContainer">
      <button className='postReviewBut' onClick={onCancel}>Cancel</button>
        <button className='postReviewBut'>Post Review</button>
      </div>
    </form>
  );
};

export default CreateReviewpage;
