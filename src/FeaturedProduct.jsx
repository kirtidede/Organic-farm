
import React, { Component, useState } from 'react';


import TextRating from './TextRating';

const FeaturedProduct = (props) => {
 
   
  return (
  
  <>
  
  
  
  
  

  <div class="card featuredcard my-5" style={{width:" 15rem",height:'450px'}}>
   <div className='card-head'>

   <img src={props.image} class="card-img-top" alt="..."/>
   </div>
  
  <div class="card-body text-center" >
    <h6 class="card-title text-center "style={{color:"rgb(6, 71, 6)"}}>{props.pname}</h6>
    
    <TextRating />
 

 

<h5 className='text-center' style={{ color: 'rgba(82, 40, 8, 0.724)'}}>{props.price}</h5>

<span>
<button className='btn btn-outline-light bg-warning'><i class="fa-solid fa-cart-shopping"></i></button>
<button  className='btn btn-outline-light bg-warning'><i class="fa-regular fa-eye"></i></button>
<button  className='btn btn-outline-light bg-warning'><i class="fa-regular fa-heart"></i></button>

<button  className='btn btn-outline-light bg-warning '><i class="fa-solid fa-arrows-rotate"></i></button>
</span>

</div>

</div>
  
  
  </>
    
  )
}

export default FeaturedProduct