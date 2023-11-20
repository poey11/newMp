import NavBar from '../Components/NavBar.js';
import SubNav from '../Components/SubNavBar.js'; 

const Postpage = () => {
    return ( 
        <div className="PostPageContainer">
        <NavBar/>
        <div className="page-header">
            <div className="page-title">Review</div>
        </div>            
        <SubNav/>
    </div>
    );
}
 
export default Postpage;
