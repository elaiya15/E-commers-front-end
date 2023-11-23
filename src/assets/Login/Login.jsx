/* eslint-disable no-unused-vars */
import React from 'react'
import Lottie from "lottie-react";
import "./log.css"
import user from "./user.json";
import happy from "./happy icon.json";

import {useState} from "react";
import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import axios from 'axios'
import{useNavigate} from "react-router-dom"; 
import Loding from '/src/assets/spinerLoder/Loding.jsx'

const Login = () => {
  const navigate = useNavigate();

    const formvalue={
        email:"",
        password:"",
        
      };
       
      const [FormData, SetFormData] = useState(formvalue)
    const [open, SetOpen] = useState(true)
    
    const [load, SetLoad] = useState(!true)
    
    const toggle=()=>(
      SetOpen(!open)
    )



     const ViewDemo = async( )=>{
      SetLoad(true)
    const id={email:"admin@gmail.com",password:"welcome"}
      const result = await axios.post("https://e-commers-backend-sigma.vercel.app/register/signin",{
        ...id,
      });
     if(result.data){
        // console.log(response.data);
        localStorage.setItem("token",result.data);
          setTimeout(() => {
          SetLoad(!true) 
          navigate("/home");
        }, 2000);
    
    }
     }

  
  const handleSubmit= async(e)=>{
      e.preventDefault()
      SetLoad(true)
    
      const response = await axios.post("https://e-commers-backend-sigma.vercel.app/register/signin",{
        ...FormData,
      });
      
      if(response.data){
        // console.log(response.data);
        localStorage.setItem("token",response.data);
          setTimeout(() => {
          SetLoad(!true) 
          navigate("/home");
        }, 2000);
        
    
    }
    
    
    }

  return (
    <>
    {(load===true)?<Loding/> :
    <div className="loginhead">
     <Lottie className="logicon" animationData={user} 
          loop={true} /> 

      <div className="signinpage" >  
        <h1 className="log">Sign-in</h1>
        <h1 className="logtitel"> <Lottie  className="happy" animationData={happy} loop={true} /> Happydeal</h1>
       
        <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="contain">
     <div className="text"> <span className="Confirmicon"><MailOutlineIcon/> </span>
     <TextField   sx={{ ml:3,mt:3, pb:0.5}}id="standard-basic" label="Email" type="email" variant="standard" required  value={FormData.email} onChange={(e)=>SetFormData({...FormData, email: e.target.value})} />
      </div>
      <div className="text"><span className="Confirmicon"> < HttpsIcon/> </span>
     <TextField sx={{ ml:3,mt:3, }}id="standard" label="Password" type={(open===true)?"password":"text"} variant="standard" required value={FormData.password}   onChange={(e)=>SetFormData({...FormData, password: e.target.value})} />
     <span className="eye"> { (open === true)?<VisibilityOffIcon onClick={toggle}/> :<VisibilityIcon onClick={toggle}/> }   </span>
      </div><br/>
   <div className="bt" >
  <button className="signupbtn" type="submit"  >Sign-in</button> 
  <div className="sigin"> Create New Account <a className="ac"href="/signup">Sign-up </a> </div>
  {/* <a className="ac"href="/home">Demo </a> */}
  <br/><div className="viewDemo" onClick={ViewDemo}> <img src="/eye.png"/>
  <span >View Demo </span> </div>
   </div>
    </div> 
    </form>
      <div> 
       </div>
       </div>
    

    </div>}
    </>
  )
}

export default Login
