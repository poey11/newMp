
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

      <div className='title-sort'></div>

      <div className='sort-container'>
        <div id='SortTitle'>South Bound Route  | </div>


        <label htmlFor="SortInput" className="SortLabel"> Sort By: </label>
        <select name="SortInput" class="Sort">
          <option value ="Date">Date</option>
          <option value ="Rate">Ratings</option>
        </select>

        <label htmlFor="MoreActions" className="Actions"></label>
        <select name="MoreActions" class="MoreActions">
          <option value ="MoreActions">More Actions</option>
          <option value ="Text">Text</option>
        </select>
      </div>

    
    <body>
      <div className='reviews-container'>
        <div id='south-name-review'>First Name Last Name</div>
        <div id='south-title-review'>South Bound Routes</div>
        <div id='south-text-review'>
          <p>
          This is your forum post. Use this space to connect with 
          your audience in a way that’s current and interesting. 
          Post relevant information that will encourage discussion and 
          collaboration.....
          </p>
        </div>
      </div>

      <div className='icons-container'>
        
  
      </div>

    </body>
    </div>

    
  );
};

export default SouthBoundPage;
