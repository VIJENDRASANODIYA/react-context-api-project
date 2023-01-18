
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contect from './Contect';
import Navbar from './Navbar';
import Service from './Service';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  
  return (
    <div className="App">
 
      <h1>Hello Geekster</h1>
      <BrowserRouter>
      
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contect' element={<Contect />} />
          <Route path='/Service' element={<Service />} />



        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
