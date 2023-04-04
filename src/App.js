import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (

    // <Notecontext>
    <HashRouter>


      


      <Navbar/>
     
      <Routes>

      <Route exact path="/" element={<Home/>}/>

      </Routes>
    


      </HashRouter>
      // </Notecontext>
  );
}

export default App;
