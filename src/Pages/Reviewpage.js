import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js';
import North from '../Components/HPNorth.js';
import South from '../Components/HPSouth.js';
import { Link } from "react-router-dom"; 

const Reviewpage = () => {
    
    return (  
        <div className="ReviewBody">
            <NavBar/>
            <div className="page-header">
                <div className="page-title">Review</div>
            </div>
            <SubNav/>
            <Link className='containerClick' to='/South'>
                <South/>
            </Link>
            <Link className='containerClick' to='/North'>
                <North/>
            </Link>
        </div>
    );
}
 
export default Reviewpage;