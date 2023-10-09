/* eslint-disable react/prop-types */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
import React from 'react'
import './product.css'
import Data from './Data.jsx'
import { useState } from 'react';

import {addTask } from '/src/assets/redux/Slice';
import { useDispatch,} from 'react-redux';
import Payment from '/src/assets/PaymentIntegaration/Payment.jsx'

const Products = ({addData}) => {
  const dispatch = useDispatch();
const [cardItems, setCardItems] = useState([])


// add to cart
const AddBuyCart=(product)=>{

dispatch(addTask({product}));
}



return (
    <div>
      <div className="productdata">
      {Data.map(( img,index) =>(
       <div className="productItem" key={index} > <img className="productImg" src={img.image} /> 
       <span className="em">&#8377;{img.price}</span><br/>
       <span className="h3">{img.name} </span>
       <button className="addCart" onClick={(e)=>AddBuyCart(img)}>AddCart</button><br/>
       {/* <button className="addCart" onClick={(e)=>BuyNow(img)} >BuyNow</button> */}
       <Payment ProductDetails={img}/>

       </div>
      ))}
      </div>
    </div>
  )
}

export default Products
