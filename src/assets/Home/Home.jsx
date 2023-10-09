import React,{useEffect} from 'react'
import './home.css'
import Nav from './nav/Nav.jsx'
import AddCart from './Addcart/AddCard'
import Products from "./Product/Products";

import{useNavigate} from "react-router-dom"; 

const Home = () => {
  const navigate = useNavigate();

  const auth=localStorage.getItem("token")
 
  

  useEffect(() => {
   if (!auth ){
         return navigate("/")
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[auth]);


const [cart, setCart] = React.useState(!true)

  return ( 
    <>
     {auth?
     <div className="homepage">
      <Nav cartView={(e)=> setCart(e)}/> 
      
      {(cart===true)? <AddCart />:<Products />}  
     
    </div>
     : <></>}

    
    </>
  )
}

export default Home
