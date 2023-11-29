import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import '../Page Style/editReviewpageCSS.css';

const EditReviewpage = () => {
    return (  
    <div className="EditReviewCont">
      <NavBar />
      <div className="page-header">
        <div className="page-title">Edit Review</div>
      </div>
      <SubNav />
      <div className="CreateReviewHeader">
        <div className="paraHeader">
          Edit your review about your trip using our bus!
        </div>
      </div>
      <div className="divider" id="CreateReviewDivider"/>
      
    </div>
    );
}
 
export default EditReviewpage;