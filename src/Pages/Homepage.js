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
                <Link className='containerClick' to='/South'>
                    <South/>
                </Link>
                <Link className='containerClick' to ='/North'>
                    <North/>
                </Link>
                <div className="review-container">
                    <Link to ="/Review" > 
                        <input type="button" className ="review-button"  value="CHECK REVIEWS"/>
                    </Link>
                </div>
                
                <div className="hp-pics">
                    <img
                        className="pic1"
                        alt=""
                        src="./jonathankemper1hhrdiolfpuunsplash-1@2x.png"
                    />
                
                    <img
                        className="pic2"
                        alt="" src="./stocksy-txp226f62b2ane300-medium-4582193-1@2x.png"
                    />
                     <div className="pic-tags">
                            Tags: #TravelSafeWithIgan, #IganTheFriendlyBus, #MalutoTrans
                    </div>
                </div>
                <div className="VisMis">
                    <div className="believe">WHAT WE BELIEVE</div>
                    <div className="introCont">
                        <p className="describe" >
                            At <span className="igan">IGAN</span>, we are dedicated to providing exceptional transportation services to our passengers, 
                            ensuring safety, comfort, and reliability in every journey. We believe in connecting communities,
                            creating memories, and making travel convenient and enjoyable for all.
                        </p>
                    </div>
                    <div className="MisCont">
                        <span className="igan">Our Mission</span>
                        <p className="mission">
                            Connecting Communities, One Ride at a Time <br/>
                            Our mission is to serve as a catalyst for community connectivity by offering 
                            reliable and efficient bus transportation services. We strive to exceed our 
                            passengers' expectations in terms of safety, comfort, and punctuality while 
                            minimizing our environmental impact.
                        </p>
                    </div>
                    <div className="VisCont">
                        <span className="igan">Our Vision</span>
                        <p className="mission">
                            Leading the Way in Sustainable Transportation<br/>
                            We envision being at the forefront of sustainable transportation, setting industry
                            standards and inspiring positive change in the way people perceive and use bus 
                            services. We aim to be a beacon of innovation, continually exploring ways to reduce
                            our carbon footprint and contribute to a greener future.
                        </p>
                    </div>
                </div>
            </div>            
        </div>
    );
}

/* */
export default Homepage;