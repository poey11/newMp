import './App.css';
import Home from './Pages/Homepage';
import Review from './Pages/Reviewpage';
import Gallery from './Pages/Gallerypage';
import About from './Pages/Aboutpage';
import Login from './Pages/Loginpage';
import Register from './Pages/Registerpage';
import Profile from './Pages/Profilepage';
import NorthBound from './Pages/NorthBoundPostspage';
import NorthBoundPosts from './Pages/NorthBoundPostspage';
import SouthBound from './Pages/SouthBoundpage';
import SouthBoundPosts from './Pages/SouthBoundPostspage';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  
} from "react-router-dom"; 

function App() {
  return (
   <>
      <Router>
        <Routes>
          {
            <Route exact path ="/" Component={Home}/>
          }
          {
            <Route exact path ="/Review" Component={Review}/>
          }
          {
            <Route exact path="/Login" Component={Login}/>
          }
          {
            <Route exact path="/About" Component={About}/>
          }
          {
            <Route exact path="/Gallery" Component={Gallery}/>
          }
          {
            <Route exact path ="/Register" Component={SouthBoundPosts}/>
          }
          {
            <Route exact path ="/South" Component={Home}/>
          }
          {
            <Route exact path ="/North" Component={Home}/>
          }
          {
            <Route exact path ="/Post" Component={Home}/>
          }
           {
            <Route exact path ="/Profile" Component={Home}/>
          }
           {
            <Route exact path ="/Create" Component={Home}/>
          }
          {
            <Route exact path ="/Edit" Component={Home}/>
          }
        </Routes>
      </Router>
   </>
  );
};


export default App;
