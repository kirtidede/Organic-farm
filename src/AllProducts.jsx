import React, { Component } from 'react'
import Slider from "react-slick";
import Card from "./Card";
export default class AllProducts extends Component {
  render(
  settings = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 600,
             settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
      },

    cards = [
            {
              id: '1',
              name: 'Brocolli',
              imageSrc: 'images/category-1-400x400.jpg',
              number: '36 Products'
            },
            {
              id: '2',
              name: 'Cherry',
              imageSrc: 'images/category-2-400x400.jpg',
              number: '50 Products'
            },
            {
              id: '3',
              name: 'Grapes',
              imageSrc: 'images/category-3-400x400.jpg',
              number: '87 Products'
            },
            {
              id: '4',
              name: 'Carrot',
              imageSrc: 'images/category-5-400x400.jpg',
              number: '50 Products'
            },
            {
              id: '5',
              name: 'Corn',
              imageSrc: 'images/category-4-400x400.jpg',
              number: '80 Products'
            },
            {
              id: '6',
              name: 'Bean',
              imageSrc: 'images/category-6-400x400.jpg',
              number: '61 Products'
            },
            {
                id: '6',
                name: 'Beans',
                imageSrc: 'images/category-6-400x400.jpg',
                number: '60 Products'
              },
              {
                id: '7',
                name: 'Apple',
                imageSrc: 'images/category-7-400x400.jpg',
                number: '50 Products'
              },
              {
                id: '8',
                name: 'Bananas',
                imageSrc: 'images/category-8-400x400.jpg',
                number: '87 Products'
              },
              {
                id: '9',
                name: 'Mashroom',
                imageSrc: 'images/category-9-400x400.jpg',
                number: '80 Products'
              },
              {
                id: '10',
                name: 'Potato',
                imageSrc: 'images/category-10-400x400.jpg',
                number: '76 Products'
              },
        
        
          ]
         
  ) {
    return (
     <>



<Slider {...settings} className='col-md-12 col-lg-12 col-sm-12 px-5  ' data-bs-interval="500"  style={{justifycontent:'space-around'}} >

             


{

cards.map((val, index, array) => {
  return (

    <>


      <div className="  my-3  mx-3 ">
        <div className='row'>



          <Card

            id={val.id}
            name={val.name}
            imageSrc={val.imageSrc}
            number={val.number}


          />
        </div>
      </div>


    </>
  )

})

}
        </Slider>
       
     </>
    )
  }
}
