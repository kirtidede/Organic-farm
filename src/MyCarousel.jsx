

// ******************************************************************
import React, { useRef } from "react";
import FeaturedProduct from './FeaturedProduct';
import Slider from "react-slick";

function MyCarousel() {
  let sliderRef = useRef(null);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container">
      
      <Slider ref={slider => (sliderRef = slider)} {...settings} className="px-auto">
        <div>
          <center>
          <FeaturedProduct
           id='1'
           pname='Organic Lemon'
           image='images/category-13-400x400.jpg'
           price ='$4.24'
           
       />
          </center>
        
       
        </div>
        <div><center>
        <FeaturedProduct
          id='2'
          pname="Organic Tomato"
          image='images/category-12-400x400.jpg'
          price= "$3.50" 
          />
        </center>
        
        </div>
        <div>
          <center><FeaturedProduct
           id='7'
           pname='Organic Apple'
           image='images/category-7-400x400.jpg'
           price='$5.40'
   />
       </center>
       </div>
        <div><center>
        <FeaturedProduct
        id='8'
        pname='Organic Bean'
        image='images/category-6-400x400.jpg'
        price="$15.00" 
          />
        </center>
        
        </div>
        <div><center>
        <FeaturedProduct
            id='5'
            pname='Organic Mushroom'
            image='images/category-9-400x400.jpg'
            price='$15.40'
          />
        </center>
        
        </div>
        
      </Slider>
     
    </div>
  );
}
export default MyCarousel;
