import NavBar from '../Components/NavBar.js';
import '../Page Style/LoginpageCSS.css';
import { Link } from "react-router-dom"; 
import {useState,useEffect } from 'react';


const Loginpage = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('') 

      const isLoginSuccessful = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: Username, password: Password }),
            });
    
            if (!response.ok) {
                const text = await response.text();
                setUsername('')
                setPassword('')
                throw new Error(`Login failed: ${text}`);
            }
            alert("Login Successful");
            window.location.assign('/');
        } catch (error) {
            console.error('Error during login:', error);
            setUsername('')
            setPassword('')
            alert("Login failed. Wrong Username or Password");
        }
    };
    
    
    return (  
    <form className="LoginContainer" onSubmit={isLoginSuccessful}> 
        <NavBar/>
        <div className="Page-Header">
            <div className="Page-Title">Login</div>
        </div>
        <div className="divider"/>
        <img className="n-2-icon"
            alt=""
            src="/login_background.jpg"/>
        <div className="loginPageChild">
            <div className="LoginInput">
                <div className="maluto-transportation">MALUTO TRANSPORTATION</div>
                <div className="travel-corporation">
                    AND TRAVEL CORPORATION BY MEHRY
                </div>
                <img
                    className="malutotranslogo-icon1"
                    alt=""
                    src="/malutotranslogo1@2x.png"
                />
                <div className="userN">Username</div>
                <input type="text" id="loginUN" placeholder='Username' className='userInput' onChange={(e) => setUsername(e.target.value)} value={Username} required/>
                <div className="pass">Password</div>
                <input type="password"   id="loginPS" placeholder='Password' className='passInput' onChange={(e) => setPassword(e.target.value)} value={Password} required/>
            </div>
            <input type='checkbox' className="RememberMeBox"  id="RememberMeBox" />
            <p className='forget'>Forgot Password?</p>
            <label className = "RememberLabel" htmlFor="RememberMeBox">Keep me signed in</label>
            
            <button className="loginButt" >Login</button>
            
            <Link to = "/Register">
                <input type="button" className="RegisterButt" value={'Sign Up'}/>
            </Link>
            
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
    </form> 
);
}
 
export default Loginpage;