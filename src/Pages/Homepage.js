import '../Page Style/HomepageCSS.css';

import NavBar from '../Components/NavBar.js';
import North from '../Components/HPNorth.js';
import South from '../Components/HPSouth.js';
import { Link } from "react-router-dom"; 

const Homepage  = () => {
    return(
        <div className="HomePageContainer">
                <NavBar/>
            <div className='body'>
                <div className="title">
                    <p className = "header-1">{`MALUTO TRANSPORTATION  `}</p>
                    <p className = "header-1">AND TRAVEL CORPORATION BY MEHRY</p>
                </div>
                
                <img src="./malutotranslogo@2x.png" alt="" className="bodyLogo" />
                <div className="moving-forward-passengers-container">
                    <span>{`Moving `}</span>
                    <i className="forward">forward</i>
                    <span>{`, Passengers `}</span>
                    <i className="forward">
                    <span>first</span>
                    <span className="span">.</span>
                    </i>
                </div>
                <div className='dividerHP' />
                <Link className='containerClick' to='/'>
                    <South/>
                </Link>
                <Link className='containerClick' to ='/'>
                    <North/>
                </Link>
                <div className="review-container">
                    <Link to ="/" > 
                        <input type="button" className ="review-button"  value="CHECK REVIEWS"/>
                    </Link>
                </div>
            </div>            
        </div>
    );
}

export default Homepage;