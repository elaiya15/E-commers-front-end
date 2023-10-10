/* eslint-disable no-const-assign */
import React from 'react'
import './addcart.css'
import Lottie from "lottie-react";
import EmptyCart from './animation/EmptyCart.json'
import {  useSelector} from 'react-redux';

import happydeal from '/public/happydeal_icon.png'
import {updateTask } from '/src/assets/redux/Slice';

import { useDispatch,} from 'react-redux';
import { useState,useEffect } from 'react';



const AddCard = () => {
  const {cardItems} = useSelector((state)=>state.task)
  
  const [Items, setItems] = useState(cardItems)
 

 
 useEffect(() => {

    dispatch(updateTask({Items}));
  }, [Items])

  const dispatch= useDispatch()

 
  const totalvalues =Items.reduce(
    (accumulator, Value) => accumulator + Value.quantity * Value.price,
    0,);

  const  Remove=(id)=>{
    setItems(Items.filter((task) => task.id !== id)); 
 }
  const  High=(product)=>{
     setItems(cardItems.map((item)=>item.id===product.id?{...product,quantity:product.quantity+1}:item))
 
 }
  const  Lower=(product)=>{
    setItems(cardItems.map((item)=>item.id===product.id?{...product,quantity:product.quantity-1}:item))
 }

 const BuyNow=(params)=>{
 
//  console.log(params);
  const amount=params

  // const order = await createOrder(params); //  Create order on your backend


  const options = {
   

    key: (import.meta.env.VITE_KEY), 
    key_secret:(import.meta.env. VITE_KEY_SECRET),
    amount: amount *100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "happydeal",
    description: "Test Transaction",
    image: happydeal,
    // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "elaiya",
      email: "youremail@example.com",
      contact: "",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#2fb954e8",
    },
  };

  const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();


}





  return (
    <> 
    <div className="listthead">
    {(Items<=0)?
     <div className="addcarthead">
     <Lottie className="emptycart" animationData={EmptyCart} loop={true} speed={1} /> 
          <h2 className="noitem">No-Item-found</h2>
     </div>:
     <div className='cartlist' >
      {Items.map(( img,index) =>(
       <div className="listitem" key={index} > <img className="listImg" src={img.image} /> 
       <div className="price">&#8377;{img.price}</div>
       <br/>
       <span className="h3name">{img.name} </span>
       {(img.quantity>=10)?<></>: <button className="priceUpdate" onClick={(e)=>High(img)}>+</button>}

       <span className="qulity">{img.quantity } </span>

       {(img.quantity<=1)?<></>: <button className="priceUpdate" onClick={(e)=>Lower(img)}>-</button>}

       <button className="Removecart" onClick={(e)=>Remove(img.id)} >Remove</button>
       
       </div>))} 
       <div className="paybutton" > <h4 className="TotalAmount"> Total Amount &#8377;{totalvalues}   </h4> 
        <button className="buycart" onClick={(e)=>BuyNow(totalvalues)} >Pay</button>
</div>
     </div>
    }
    </div>
    </>
  )
}

export default AddCard




