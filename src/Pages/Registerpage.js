import {useState } from 'react';
import Nav from '../Components/NavBar';
import '../Page Style/RegisterpageCSS.css';
import { useNavigate } from 'react-router-dom';



const Registerpage = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Bio, setBio] = useState('')
    const Roles = "Customer"
    const [Avatar, setAvatar] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = { Username, Password, Bio, Roles, Avatar };
    
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const json = await response.json();
    
        if (!response.ok) {
            alert(json.error);
        } else {
            if (response.status === 409) {
                alert('Username already exists');
                setUsername('');
                setPassword('');
                setBio('');
                setAvatar('');
            } else {
                alert('User Registered Successfully');
                setUsername('');
                setPassword('');
                setBio('');
                setAvatar('');
                navigate('/Login')
            }
        }
    };
    
    

    return ( 
        <form className="Register-page" onSubmit={handleSubmit}>
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
                            <input type="text" className="userNameInput" id='userNameInput' onChange={(e) => setUsername(e.target.value)} value = {Username} required/>

                            <div className="newPasswordLabel">New Password</div>
                            <input type="password" className="newPasswordInput" id='newPasswordInput' onChange={(e) => setPassword(e.target.value)} value = {Password} required/>
                            

                            <div className="ProfilePicLabel">Profile Avatar URL</div>
                            <textarea type="text" id="avatar" className="ProfilePicInput" onChange={(e) => setAvatar(e.target.value)} value = {Avatar} required/>    

                         
                            
                            <div className="shortDesc">User Description</div>
                            <textarea className="ShortDescInput" id='ShortDescInput' onChange={(e) => setBio(e.target.value)} value = {Bio} />
                        
                            <button className="RegisterButt"  id ="RegPbutton" value={'Register'}> Register</button>
                        
                            
                        
                        
                            
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
        </form>
     );
}
 
export default Registerpage;