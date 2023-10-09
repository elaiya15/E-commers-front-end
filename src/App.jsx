// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Signup from './assets/Signup/Signup.jsx'
import Login from './assets/Login/Login.jsx'
import Home from './assets/Home/Home.jsx';
import Loding from './assets/spinerLoder/Loding.jsx'
function App() {
  return (
    <>
    
      <BrowserRouter>
  <Routes>
   <Route path="/Loding" element={<Loding/>}/>
   <Route path="/" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/home" element={<Home/>}/> 
  
  </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
