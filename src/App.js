
import './App.css';
import {BrowserRouter as Router,
   Routes,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Contactpage } from './components/Contactpage';
import ProjectContainer from './components/ProjectContainer';
import { Resume } from './components/Resume';


function App() {
  return (
    <>
    
    <div className='App'>
      <Router basename='/Portfolio'>
        <Navbar/>
       
      <Routes>
          <Route exact path="/" element={  <Homepage />}/>
          <Route path="/project" element={  <ProjectContainer />}/>
          <Route path="/contact" element={  <Contactpage />}/>
          <Route path="/resume" element={  <Resume />}/>
      </Routes>
        
    </Router>
    </div>
   
   </>
  );
}

export default App;
