
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';
import Review from '../Components/ReviewPost.js';
import { Link } from "react-router-dom"; 



const NorthBoundpage = () => {
  const Create=()=>{
    return window.location.assign('/Create')
  }
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
        <button className='loginButt' id = 'CreateReview' onClick={Create}>Create New Review</button>
      </div>
      <div className='reviews-container'>
      <Link className='containerClick' to = '/Post'>
          <Review/>
      </Link>
       

      </div>
    </div>
  );
};

export default NorthBoundpage;
