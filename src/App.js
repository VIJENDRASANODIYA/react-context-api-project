
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contect from './Contect';
// import Navbar from './Navbar';
import Service from './Service';
import Navbar from './Navbar';
import { useState } from 'react';
import myContext from './myContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <h1>Hello Geekster</h1>
 
      <BrowserRouter>
      <myContext.Provider value={{ isDark, setIsDark }}>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contect' element={<Contect />} />
          <Route path='/Service' element={<Service />} />



        </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
