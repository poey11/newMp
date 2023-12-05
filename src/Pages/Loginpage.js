import NavBar from '../Components/NavBar.js';
import '../Page Style/LoginpageCSS.css';
import { Link } from "react-router-dom"; 
import {useState,useEffect } from 'react';


const Loginpage = () => {
    const [users, setUsers] = useState([])
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('') 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/user/");
                
                console.log('Response status:', response.status);
                console.log('Response headers:', response.headers);
                console.log (response)
                console.log (response.json)
                const text = await response.text();
                
                console.log('Response text:', text);
        
                try {
                    const json = JSON.parse(text);
                    console.log('Response JSON:', json);
        
                    if (response.ok) {
                        setUsers(json);
                    } else {
                        console.error('Server returned an error:', json);
                    }
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        
        fetchUsers();
      }, [users]); // The empty dependency array ensures this effect runs only once when the component mounts
      
    
    const isLoginSuccessful = async(e) =>{
        e.preventDefault() 
        console.log(Username + Password);

        console.log(users);
        try{
            for(let i = 0; i < users.length ; i++){
                if(users[i].Username === Username){
                   if(users[i].Password === Password){
                       alert("Login Successful")
                       return window.location.assign('/')
                   } 
                }
            }
            alert("Login Fail. Wrong Username or Password")
        }
        catch(error){
            alert(error)
        }
    }
    
    
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