import './App.css';
import Home from './Pages/Homepage';
import Review from './Pages/Reviewpage';

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
            <Route exact path="/Login" Component={Home}/>
          }
          {
            <Route exact path="/About" Component={Home}/>
          }
          {
            <Route exact path="/Gallery" Component={Home}/>
          }
          {
            <Route exact path ="/Register" Component={Home}/>
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
