import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/ContactUs/Contact'
import Home from './components/Home'


function App() {
  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<Home/> } exact/>
        <Route path="contact-us" element={<Contact />} exact/>
        
      </Routes>
    </div>
  );
}

export default App;