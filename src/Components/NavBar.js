import { useEffect,useState } from 'react';
import '../Component Style/NavBarCSS.css';
import { Link } from "react-router-dom"; 

const NavBar = () => {
    const [session, setSession] = useState(false);
    useEffect(()=>{
        const fetchAuth = async () => {
            try {
                const response = await fetch("/api/session/auth");
                const json = await response.json();
                if (response.ok) {
                    // Session exists, check authentication status
                    setSession(true)
                } else {
                    // Session doesn't exist
                    return setSession(false);
                }

            } catch (error) {
                // Handle fetch error
                console.error("Error fetching authentication status:", error);
                setSession(false);
            }
            
        };
        
        fetchAuth();
        const loginB= document.getElementById("login-container")

        if(session === false){
           loginB.onclick = handleloginPage;
            loginB.innerHTML  = "Login"

        }else{
            loginB.onclick = handleLogout;
            loginB.innerHTML = "Logout"
        }
      },[session])
    const handleLogout = async()=>{
        const response = await fetch("/api/user/logout",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    
        const json = await response.json()
            
        if(response.ok){
        setSession(false);
         window.location.assign('/');
        }
        else{
            console.log(json.error)
        }
    }
    const handleloginPage=()=>{
        window.location.assign('/Login');
    }
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
         
                
            <button className ="login-container" id = "login-container"  onClick={handleloginPage}>Login</button>
                   
             
            
            
               
        </nav>

      );
}
 
export default NavBar;
