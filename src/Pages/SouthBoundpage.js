
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';
import Review from '../Components/ReviewPost.js';

const SouthBoundPage = () => {
  return (
    <div className="southBoundPage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">South-Bound Route</div>
      </div>
      <SubNav/>
      <div className='sort-container'>
        <label htmlFor="SortInput" className="SortLabel">Sort By: </label>
        <select name="SortInput" id="Sort">
          <option value ="Date">Date</option>
          <option value ="Rate">Ratings</option>
          
        </select>
      </div>
      <div className='reviews-container'>

      </div>
    </div>
  );
};

export default SouthBoundPage;
