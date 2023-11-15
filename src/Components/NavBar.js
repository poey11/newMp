import '../Component Style/NavBarCSS.css';
import { Link } from "react-router-dom"; 

const NavBar = () => {
    
    return (
        <nav className="navBar">
            <img className="navLogo" src="./malutotranslogo@2x.png" alt=""/>
            <div className="trans-logo">MALUTO TRANS BY MEHRY</div>
            <ul className="Navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/Review">Reviews</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Gallery">Gallery</Link>
                </li>
            </ul>
            <Link to ="/Login"> 
                <button type = "button"
                    className ="login-container">
                    LOGIN 
                </button>
            </Link>  
               
        </nav>

      );
}
 
export default NavBar;
