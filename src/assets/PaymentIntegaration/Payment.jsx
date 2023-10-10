/* eslint-disable no-undef */
import React from 'react'
// import dotenv from 'dotenv'
import happydeal from '/happydeal_icon.png'
// dotenv.config();
// const key=
console.log(import.meta.env.VITE_KEY) 

const Payment = ({ProductDetails}) => {
  // dotenv.config();
// buy
const BuyNow=(params)=>{
  const amount=params.price
  const options = {
    key: (import.meta.env.VITE_KEY) , 
    // console.log(key);
    key_secret:(import.meta.env. VITE_KEY_SECRET),
    amount: amount *100,
    currency: "INR",
    name: "happydeal",
    description: "Test Transaction",
    image:happydeal,
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
    
    <div className='payhead'>
      
      <button className="addCart" onClick={(e)=>BuyNow(ProductDetails)} >BuyNow</button>

    </div>
    </>
  )
}

export default Payment
