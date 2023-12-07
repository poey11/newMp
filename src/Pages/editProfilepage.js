import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import '../Page Style/editProfileCSS.css';
import {useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditProfilepage = () => {
    const [users, setUsers] = useState('');
    const navigate = useNavigate();
    const [id, setId] = useState('');


    useEffect(()=>{
        const fetchUserId = async () => {
            try {
                const response = await fetch("/api/session/sessionUserId");
                const json = await response.json();
                if (response.ok) {
                    // Session exists, check authentication status
                    setId(json)
                } else {
                    // Session doesn't exist
                    alert("You are not Logged in")
                    window.location.assign('/Login');       
                  }
      
            } catch (error) {
                // Handle fetch error
                console.error("Error fetching authentication status:", error);
                setId(false);
            }
            
        };
        const fetchUsers= async ()=>{
            const response = await fetch("/api/user/");
            const json = await response.json()
    
            if(response.ok){
                setUsers(json);
            }
            
        }
        fetchUserId()
        fetchUsers()
    },[]) ;

    var tempUsername;
    var tempAvatar;
    var tempBio;
    const [newUserName, setNewUsername] = useState(tempUsername);
    const [newAvatar, setNewAvatar] = useState(tempAvatar);
    const [newBio, setNewBio] = useState(tempBio);
    
   const handleNewSubmit = async (e) => {
    e.preventDefault();

    
    const newUser = { newUserName, newBio, newAvatar };
    for(let i =0; i< users.length; i++){
        if(users[i].Username === newUserName){
            return alert("The username is already used")
        }
    }
    try {
        const response = await fetch('/api/user/'+id, {
            method: 'PATCH',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
       
        if (!response.ok) {
            alert(json.error);
        }
       else{
            alert("User Info Updated Successfully");
            navigate(-1);
        }
    } catch (error) {
        console.error('Error updating user:', error);
    }
};


    return (  
        <form className="editContainer" onSubmit={handleNewSubmit}>
            <NavBar/>
            <div className="page-header">
                <div className="page-title">Edit Profile</div>
            </div>
            <SubNav/>
            <img className="n-2-icon"
                    id="editProfileBackground"
                    alt=""
                    src="/login_background.jpg"/>
            <div className='loginPageChild' id='editProfileContainer'>
                <div htmlFor="userNameEditInput" className='userNameEditLabel' id="userNameEditLabel">Username </div> 
                <textarea type="text" className='userNameEditInput' id='userNameEditInput'  onChange={(e)=> setNewUsername(e.target.value)} value={newUserName }/>
                <div className="userAvatarEditLabel"htmlFor="userAvatarEditInput" id ="userAvatarEditLabel">Avatar URL </div>        
                <textarea  type="text" className='userAvatarEditInput'  id='userAvatarEditInput' placeholder={ users.Avatar} onChange={(e)=> setNewAvatar(e.target.value)}   value={newAvatar}/>
                <div  className='userDescEditLabel' id="userDescEditLabel">User Description </div>
                <textarea  className="userDescEditInput"name="" id="userDescEditInput" cols="30" rows="10" placeholder={ users.Bio} onChange={(e)=> setNewBio(e.target.value)}    value={newBio }/>
        
                <button className='saveChangesBut'>Save Changes</button>
                <Link to ='/Profile'>
                    <input type='button' className='cancelChangesBut' value={'Cancel Changes'}/>
                </Link>
            </div>

        </form>
    );
}
 

 
export default EditProfilepage;