import '../Component Style/ReviewPostCSS.css'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect } from 'react';


const ReviewPost = (props) => {
    const Title = props.Title;
    const AuthorId = props.AuthorId
    const Date = props.Date
    const Body =props.Body
    const Agency =props.Agency;
    const id =props.id;
    const Navigate = useNavigate();
    const [User, setUser] = useState('');

    useEffect(()=>{
        const fetchUser= async ()=>{
            const response = await fetch("/api/user/"+AuthorId);
            const json = await response.json()
    
            if(response.ok){
                setUser(json);
            }
            
        }
        fetchUser()
    },[]) ;

    const onSubmit= (()=>{
        Navigate('/Post',{state:{id}})
    })
    
    return (  
        <div className="container" id="reviewPostContainer" onClick={onSubmit} >
            
               <div className="reviewHeader">
                    <h1 className="ReviewTitle">{Title}</h1>
                    <p className='reviewAuthor'>{User.Username}</p>
                    <p className='reviewAuthor'>{Agency}</p>
                    <p className="reviewDate">{Date}</p>
                    <div className='reviewDescription'>{Body}</div>
                </div>
        
                
        </div>
    );
}
 
export default ReviewPost;