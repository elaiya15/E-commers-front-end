import React from 'react'

import happydeal from '/public/happydeal_icon.png'

const Payment = ({ProductDetails}) => {
// buy
const BuyNow=(params)=>{
  const amount=params.price
  const options = {
    key:"rzp_test_KVohU5fo9MQ5oR", // Enter the Key ID generated from the Dashboard
    key_secret: "ALHWIg38tCL0yQYsjVTjaQsP",
    amount: amount *100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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
