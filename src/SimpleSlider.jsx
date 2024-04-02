// import React, { Component } from 'react'
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {

   
//   render(
//     settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//   ) {
//     return (
//       <>
//       <Slider {...settings}>
//       <div>
//         <h3><img src='images/category-6-400x400.jpg' alt=''/></h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//     </>
//     )
//   }
// }



// import React, { useState } from "react";
// import Slider from "react-slick";
// import Card from "./Card";

// function Resizable() {


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="slider-container">
//       <h2> Resizable Collapsible </h2>
      
      
//       <div>
//         <Slider {...settings}>
//           <div>
//             <h3><Card/></h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Resizable; 



import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  return (
    <Slider {...settings} >
     
      <div className="pt-5 "><center>
       <div className=' card  card1 w-75 rounded' style={{height:'500px',border:'none',backgroundColor:"white"}}>
        <div className="card-header text-center "style={{border:'none'}}>
          <h1 className="fs-1 heading">Testimonials</h1>
         
          <p className="px-5 py-3 fs-4 text-secondary ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut <sint className="lorem10"></sint></p>
       
       
          <div className="card-body text-center  py-3"><center>
        <img src='images/avatar-1-200x200.jpg' className="img-fluid roundes mt-3" style={{borderRadius:'50%',height:'150px'}} alt=''/>
         <h5 className="name">Tiana Mcdonnell</h5>
         <h6 className="text-secondary">Sales Manager</h6>
        </center>
                   </div>
        </div>
       
       </div>
       </center>
      </div>
     
      <div>
      <div className="pt-5 "><center>
       <div className=' card  card1 w-75 rounded' style={{height:'500px',border:'none',backgroundColor:"white"}}>
        <div className="card-header text-center "style={{border:'none'}}>
          <h1 className="fs-1 heading ">Testimonials</h1>
          <p className="px-5 py-3 fs-4 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut <sint className="lorem10"></sint></p>
       
       
          <div className="card-body text-center  py-3"><center>
        <img src='images/avatar-2-200x200.jpg' className="img-fluid roundes mt-3" style={{borderRadius:'50%',height:'150px'}} alt=''/>
         <h5 className="name">John Doe</h5>
         <h6 className="text-secondary">Product Manager</h6>
        </center>
                   </div>
        </div>
       
       </div>
       </center>
      </div>
      </div>
      <div>
      <div className="pt-5 "><center>
       <div className=' card  card1 w-75 rounded' style={{height:'500px',border:'none',backgroundColor:"white"}}>
        <div className="card-header text-center "style={{border:'none'}}>
          <h1 className="fs-1 heading">Testimonials</h1>
          <p className="px-5 py-3 fs-4 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore repudiandae maxime quos aut <sint className="lorem10"></sint></p>
       
       
          <div className="card-body text-center  py-3"><center>
        <img src='images/avatar-3-200x200.jpg' className="img-fluid roundes mt-3" style={{borderRadius:'50%',height:'150px'}} alt=''/>
         <h5 className="name">Tiana Kim</h5>
         <h6 className="text-secondary">Human Resourse</h6>
        </center>
                   </div>
        </div>
       
       </div>
       </center>
      </div>
      </div>
      
    </Slider>
  );
}