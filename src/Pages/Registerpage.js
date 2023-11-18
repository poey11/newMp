import Nav from '../Components/NavBar';
import '../Page Style/RegisterpageCSS.css';

const Registerpage = () => {

    

    return ( 
        <div className="Register-page">
            <Nav/>
            <div className="Page-Header">
                    <div className="Page-Title">Register</div>
                </div>
                <div className="divider"/>
                <img className="n-2-icon"
                    id="RegisterIcon"
                    alt=""
                    src="/login_background.jpg"/>
                <div className="register-page-child" />
                <div className="loginPageChild" id="registerChild">
                    <div className="Register-Transport">MALUTO TRANSPORTATION</div>
                    <div className="Register-Corporation" >
                        AND TRAVEL CORPORATION BY MEHRY
                    </div>
                    <img
                        className="malutotranslogo-icon1"
                        alt=""
                        src="/malutotranslogo1@2x.png"
                    />
                    <div className="registerInputs">

                            <div className="userNameLabel">Username</div>
                            <input type="text" className="userNameInput" required/>
                            <div className="ProfilePicLabel">Profile Avatar</div>
                            <input type="file" id="avatar" className="ProfilePicInput" accept="image/png, image/jpeg" required/>
                            <div className="newPasswordLabel">New Password</div>
                            <input type="password" className="newPasswordInput" required/>
                            
                            
                            <div className="shortDesc">Short Bio</div>
                            <textarea className="ShortDescInput"/>
                       
                        <input type="button" className="RegisterButt"  id ="RegPbutton" value={'Register'} />
                        
                            
                    </div>
                </div>

                <div className="footer" >
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
 
export default Registerpage;