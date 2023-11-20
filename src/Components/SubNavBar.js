import '../Component Style/SubNavBarCSS.css';
import { Link } from "react-router-dom"; 

const SubNavBar = () => {
    return (  
    <div className="SubNavBar">
            
        <div className="subNavBar">
            <ul className='bar'>
                <Link to ="/Review" className="ForumBar">
                    <li>Categories</li>
                </Link>
                <Link to ="/" className="ForumBar">
                    <li>My Reviews</li>
                </Link>
            </ul>
            <div className="searchContainer">
                <input type="text" id='search' className="searchBox" placeholder="Search..."/>
            </div>
        </div>
    </div>
);
}
 
export default SubNavBar;