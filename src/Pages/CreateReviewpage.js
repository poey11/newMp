
import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import '../Page Style/CreateReviewpageCSS.css';

const CreateReviewpage = () => {


  return (
    <div className="CreateReviewCont">
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
        <input className="titleInput" type="text" />

       
        <label htmlFor='ratingInput' className="ratingLabel">Rating: </label>
        <select className="ratingInput" id="ratingInput">
          <option value="Recommended">Recommended</option>
          <option value="Not Recommended">Not Recommended</option>
        </select>
      </div>

      <div className="reviewInputCont2">
          <label htmlFor='tripInput' className="tripLabel">Trip to the: </label>
          <select className="tripInput" id="tripInput">
            <option value="North">North Bound</option>
            <option value="South">South Bound</option>
          </select>

          <div className="agencyLabel">Travel Agency Used: </div>
          <input className="agencyInput" type="text" />
        </div>
        

      <div className='reviewContainer'>
          <textarea className="reviewInput" id="" cols="30" rows="10"placeholder='Write Your Experience...'></textarea>
      </div>
      <div className="mediaCont">
        
        <input type="text" className="mediaInput" id="mediaInput" placeholder='Insert Media URL' />
      </div>
      <div className="buttonContainer">
        <button className='postReviewBut'>Post Review</button>
      </div>
    </div>
  );
};

export default CreateReviewpage;
