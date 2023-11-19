
import Nav from '../Components/NavBar';
import '../Page Style/SouthBoundpageCSS.css';
import SubNav from '../Components/SubNavBar.js';


const NorthBoundpage = () => {
  return (
    <div className="NorthBoundpage">
      <Nav/>
      <div className="page-header">
          <div className="page-title">North-Bound Route</div>
      </div>
      <SubNav/>

    </div>
  );
};

export default NorthBoundpage;
