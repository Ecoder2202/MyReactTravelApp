import React from 'react';
import Home from './component/Pages/Home'
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom" 
import Navbar from './component/Navbar/Navbar';
import Support from './component/Pages/Support';
import About from './component/Pages/About';
import Signin from './component/Pages/Signin';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
<Route path ="/" element={<Home />}/>
<Route path ="about" element={<About />}/>
<Route path ="support" element={<Support />}/>
<Route path ="signin" element={<Signin />}/>



      </Routes>
    </Router>
      
    </>
  );
}

export default App;
