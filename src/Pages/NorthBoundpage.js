
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';
import Review from '../Components/ReviewPost.js';
import { Link } from "react-router-dom"; 

const NorthBoundpage = () => {
  return (
    <div className="NorthBoundpage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">North-Bound Route</div>
      </div>
      <SubNav/>
      <div className='sort-container'>
        <label htmlFor="Sort" id = "sortLabel" className="SortLabel">North Bound   | Sort By:</label>
        <select className="SortSelect" id="Sort">
          <option value ="Date"> Date</option>
          <option value ="Rate">Ratings</option>
        </select>
        <button className='loginButt' id = 'CreateReview'>Create New Review</button>
      </div>
      <div className='reviews-container'>
            
      </div>
    </div>
  );
};

export default NorthBoundpage;
