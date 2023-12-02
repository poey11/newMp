import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import '../Page Style/editProfileCSS.css';
import {useState,useEffect } from 'react';
import { Link } from "react-router-dom";

const EditProfilepage = () => {
    const [users, setUsers] = useState([]);
 
    const fetchUsers= async ()=>{
        const response = await fetch("/api/user/");
        const json = await response.json()

        if(response.ok){
            setUsers(json);
        }
        
    }

    useEffect(()=>{
        fetchUsers()
    },[]) ;


    const [newUserName, setNewUsername] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newBio, setNewBio] = useState('');
    const [error, setError] = useState(null)
    

   const handleNewSubmit = async (e) => {
    e.preventDefault();

   
    const newUser = { newUserName, newBio,newAvatar };
    
    try {
        const response = await fetch('/api/user/'+users[users.length-1]._id, {
            method: 'PATCH',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            alert(json.error);
            console.log(json.error);
        }

        if (response.ok) {
            alert("User Info Updated Successfully");
            setError(null);
            setNewUsername('');
            setNewBio('');
            setNewAvatar('');
            window.location.assign('/Profile');
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
                
                {users.map((data,index)=>{
                    if(index === users.length-1){
                        return(
                            <input key={data._id} type="text" className='userNameEditInput' id='userNameEditInput' placeholder={data.Username} onChange={(e)=> setNewUsername(e.target.value)}value = {newUserName}/>
                        )  
                    }
                    else{
                        return null;
                    }
                })}
               

                <div className="userAvatarEditLabel"htmlFor="userAvatarEditInput" id ="userAvatarEditLabel">Avatar URL </div>
                {users.map((data,index)=>{
                    if(index === users.length-1){
                        return(
                            <input key={data._id} type="text" className='userAvatarEditInput'  id='userAvatarEditInput' placeholder={data.Avatar} onChange={(e)=> setNewAvatar(e.target.value)}value = {newAvatar}/>
                        )  
                    }
                    else{
                        return null;
                    }
                })}
                
                
                <div  className='userDescEditLabel' id="userDescEditLabel">User Description </div>
                {users.map((data,index)=>{
                    if(index === users.length-1){
                        return(
                            <textarea key={data._id} className="userDescEditInput"name="" id="userDescEditInput" cols="30" rows="10" placeholder={data.Bio} onChange={(e)=> setNewBio(e.target.value)}value = {newBio}/>
                        )  
                    }
                    else{
                        return null;
                    }
                })}
                
                <button className='saveChangesBut'>Save Changes</button>
                <Link to ='/Profile'>
                    <input type='button' className='cancelChangesBut' value={'Cancel Changes'}/>
                </Link>
            </div>
            {error && <div className='error'>{error}</div>}

        </form>
    );
}
 

 
export default EditProfilepage;