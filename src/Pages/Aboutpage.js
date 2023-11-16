import NavBar from '../Components/NavBar.js';
import '../Page Style/AboutpageCSS.css';
const Aboutpage = () => {
    return (  
        <div className="AboutBody">
                <NavBar/>
                <div className="Page-Header">
                    <div className="Page-Title">About Us</div>
                </div>
                <div className="divider"/>
                <img className="n-2-icon"
                    alt=""
                    src="/LongBus.png"/>
                <div className="loginPageChild">
                    <div className="maluto-transportation">MALUTO TRANSPORTATION</div>
                        <div className="travel-corporation">
                            AND TRAVEL CORPORATION BY MEHRY
                        </div>
                        <img
                            className="malutotranslogo-icon1"
                            alt=""
                            src="/malutotranslogo1@2x.png"
                        />
                    <div className="at-igan-we-container">
                        <span>
                        <span>At</span>
                        </span>
                        <span className="igan">
                        <span>{` `}</span>
                        <b>IGAN</b>
                        </span>
                        <span>
                        , we are dedicated to providing exceptional transportation services to
                        our passengers, ensuring safety, comfort, and reliability in every
                        journey. We believe in connecting communities, creating memories, and
                        making travel convenient and enjoyable for all.
                        </span>
                    </div>
                </div>
                <div className="footer">
                    <span>{`Moving `}</span>
                    <i className="forward">forward</i>
                    <span>{`, Passengers `}</span>
                    <i className="forward">
                    <span>first</span>
                    <span className="span">.</span>
                    </i>
                </div>
        </div>  

    );
}
 
export default Aboutpage;