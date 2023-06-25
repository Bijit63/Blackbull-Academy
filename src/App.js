import './App.css';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PayforCourse from './Components/PayforCourse';
import CourseInfo from './Components/CourseInfo';
import Footer from './Components/Footer';

function App() {
  return (

    // <Notecontext>
    <BrowserRouter>


      


      <Navbar/>
     
      <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/payforcourse/:id" element={<PayforCourse  />}/>
      <Route exact path="/CourseInfo/:id" element={<CourseInfo  />}/>
      

      </Routes>
      <Footer/>
    


      </BrowserRouter>
      // </Notecontext>
  );
}

export default App;
