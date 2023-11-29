import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 
import '../Page Style/editProfileCSS.css';

const ediProfilepage = () => {
    return (  
        <div className="editContainer">
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
                <label htmlFor="userNameEditInput" className='userNameEditLabel'>Username </label>
                <input type="text" className='userNameEditInput' id='userNameEditInput'/>

                <label className="userAvatarEditLabel"htmlFor="userAvatarEditInput">Avatar URL </label>
                <input type="text" className='userAvatarEditInput'  id='userAvatarEditInput'/>
                
                <label htmlFor="userDescEditInput" className='userDescEditLabel'>User Description </label>
                <textarea className="userDescEditInput"name="" id="userDescEditInput" cols="30" rows="10"/>
                
                <button className='saveChangesBut'>Save Changes</button>
                <button className='cancelChangesBut'>Cancel Changes</button>
            </div>
            
        </div>
    );
}
 

 
export default ediProfilepage;