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
                            dependencies: 
                            babel/plugin-proposal-private-property-in-object: 7.21.11,
                            testing-library/jest-dom: ^5.17.0,
                            testing-library/react: ^13.4.0,
                            testing-library/user-event: ^13.5.0,
                            bcrypt: ^5.1.1,
                            connect-mongo: ^5.1.0,
                            cors: ^2.8.5,
                            dotenv: ^16.3.1,
                            express: ^4.18.2,
                            express-session: ^1.17.3,
                            mongoose: ^8.0.1,
                            react: ^18.2.0,
                            react-dom: ^18.2.0,
                            react-router-dom: ^6.20.1,
                            react-scripts: 5.0.1,
                            web-vitals: ^2.1.4
                    
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