/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import'./nav.css'
// import {  useNaviget,link} from "react-router-dom";
import Lottie from "lottie-react";
import happy from "./happy icon.json";
import cart from "./CartIcon.json";
import{useNavigate} from "react-router-dom"; 
// import img from '/public/logout (1).png'
const Nav = ({cartView}) => {
  const navigate = useNavigate();

const Bag=(e)=>{
  cartView(e)
}
const logout=()=>{
  
  localStorage.removeItem("token")
  navigate("/")
}

  return (
    <>
   <nav className="navbar"> 
   <div className="bar">
   <Lottie  className="happyicon" onClick={()=>Bag(!true)} animationData={happy} loop={false}/>
   <h1 className="navtitel"> Happydeal</h1>
   <Lottie  className="carticon" onClick={()=>Bag(true)}animationData={cart} loop={false}/>
   <img className="logouticon" onClick={logout} src="/public/logout (4).png"/>
   </div>

   </nav>
    </>
  )
}

export default Nav
