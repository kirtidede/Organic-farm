import React, { Component, useState } from 'react';



import { Carousel } from 'react-carousel-cards-npm';
import Card from './Card';
import FeaturedProduct from './FeaturedProduct';
import MyCarousel from './MyCarousel';
import { WhyChooseUs } from './WhyChooseUs';
import Testimonials from './Testimonials';
// import SimpleSlider from './SimpleSlider';


import Slider from "react-slick";
import OrganicBlogComponent from './OrganicBlogComponet';
import Email from './email';
import Footer from './Footer';
import AllProducts from './AllProducts';




export default class Home extends Component {

  

  render(

   
    
    


    setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
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
      // {
      //   id: '6',
      //   name: 'Bean',
      //   imageSrc: 'images/category-6-400x400.jpg',
      //   number: '61 Products'
      // },

    ],
    cards1 = [
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


    ],

    featuredproduct = [
      {
        id: 1,
        pname: "Organic Lettuce",
        image: "images/category-11-400x400.jpg",
        price: "$13.50"
      },
      {
        id: 2,
        pname: "Organic Tomato",
        image: "images/category-12-400x400.jpg",
        price: "$3.50"
      },
      {
        id: 3,
        pname: "Organic Lemon",
        image: "images/category-13-400x400.jpg",
        price: "$4.20"
      },
      {
        id: 4,
        pname: "Organic Potato",
        image: "images/category-10-400x400.jpg",
        price: "$12.40"
      },
      {
        id: 5,
        pname: "Organic Mushroom",
        image: "images/category-9-400x400.jpg",
        price: "$15.40"
      },
      {
        id: 6,
        pname: "Organic Banana",
        image: "images/category-8-400x400.jpg",
        price: "$4.40"
      },
      {
        id: 7,
        pname: "Organic Apple",
        image: "images/category-7-400x400.jpg",
        price: "$5.40"
      },
      {
        id: 8,
        pname: "Organic Bean",
        image: "images/category-6-400x400.jpg",
        price: "$15.00"
      },



    ],
    feature = [
      {
        id: 1,
        icon: <i class="fa-regular fa-lemon fw-light " style={{ fontSize: '5em' }}></i>,
        title: 'Organic'
      },
      {
        id: 2,
        icon: <i class="fa-solid fa-clock-rotate-left" style={{ fontSize: '5em' }}></i>,
        title: 'Fast and Easy'
      },
      {
        id: 3,
        icon: <i className="fa-solid fa-award" style={{ fontSize: '5em' }}></i>,
        title: 'High Quality'
      },
      {
        id: 4,
        icon: <i class="fa-solid fa-box" style={{ fontSize: '5em' }}></i>,
        title: 'High Quality'
      },
      {
        id: 3,
        icon: <i class="fa-solid fa-headset" style={{ fontSize: '5em' }}></i>,
        title: 'Customer Support'
      },
      {
        id: 3,
        icon: <i class="fa-solid fa-gift" style={{ fontSize: '5em' }}></i>,
        title: 'Made with Love'
      }
    ]










    // -------------------------------------------------------------------


  ) {


    return (
<>
     <div className='container'>
        <div className='row py-5'>
          <div className='col-md-12 py-5 mx-auto'>
            <h1 className=' font-primary'>Healthy foods</h1>

            <h3 className='text-secondary fs-4 fw-normal'>Your journey to a healthier life starts here...</h3>
            {/* <div className='bg1'>Home</div> */}


            <span className=' mx-2 fs-5' style={{ color: 'rgba(82, 40, 8, 0.724)' }}>shop now <i class="fa-solid fa-arrow-right arrow-right mx-2"></i></span>

          </div>
        </div>
      </div>





    


        {/* <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">

            <div class="carousel-item active " data-bs-interval="1500">
              <div className='container'>

                <div className="col-md-12 mx-5">
                  <div className='row'>
                    {

                      cards.map((val, index, array) => {
                        return (

                          <>


                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-2 col-xl-2  my-3  mx-3 ">
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

                  </div>
                </div>
              </div>

            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div className='container'>

                <div className="col-md-12 mx-5">
                  <div className='row'>
                    {

                      cards1.map((val, index, array) => {
                        return (

                          <>


                            <div className="col-md-3 col-sm-12 col-xs-12 col-lg-2 col-xl-2  my-3  mx-3">
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

                  </div>
                </div>
              </div>

            </div>

          </div>

          <button class="carousel-control-prev bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ borderRadius: '50%', height: '50px', width: '50px', marginTop: '130px', marginLeft: '60px' }}>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next bg-secondary me-4" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ borderRadius: '50%', height: '50px', width: '50px', marginTop: '130px' }}>
            <span class="carousel-control-next-icon" aria-hidden="true" ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

<AllProducts/>


        <br /><br /><br />
        <div className='col-md-12'>
          <div className='row  text-center'>
            <h1 className='fs-bold mt-5 featured-product text' style={{ color: "rgb(8, 62, 8)" }}>Featured Products</h1>
            <h4 className='text-secondary fw-normal'>We are here to change how India consumes its Greens..</h4>
          </div>
        </div>

        <br /><br />
        <div className='container mx-5'>
          <div className='col-md-12 ' >
            <div className='row'>
              {

                featuredproduct.map((val, index, array) => {
                  return (

                    <>


                      <div className="col-md-6 col-sm-6 col-xs-6 col-lg-3 mx-auto my-3 " key={index}>
                        <div className='row'>

                          <FeaturedProduct
                            id={val.id}
                            pname={val.pname}
                            image={val.image}
                            price={val.price}
                          />

                        </div>
                      </div>


                    </>
                  )

                })

              }

            </div>
          </div>


        </div>






        <div className='section section1  mt-5 pt-5'>
          <div className='container-fluid py-5'>
            <div className='col-md-12 '>
              <div className='row'>
                <div className='col-md-12 col-lg-6 col-sm-12 py-5 hotdeal '>
                  <p className='pt-5 ml-5 '>Hot deals of the week</p>
                  <p className='fs-4 text-secondary'>Get bestest offer on our best products and save up to 40%<br />
                    so what are you waitig for...
                    <br />just go for it.
                  </p>
                </div>
                <div className='col-md-12 col-lg-6 col-sm-12 pb-5 ps-5  '>
                 <cenetr>
                 <div className='carousel '>
                    <MyCarousel />

                  </div>

                 </cenetr>
                  


                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='section section1 ' style={{ marginTop: '-800px' }}>
        
        </div> */}



<br/><br/><br/><br/><br/><br/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12  col-sm-12'>
              <div className='row '>
                <h1 className='text-center choose mb-5' >Why choose us?</h1>   
                 
                <h4 className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h4>
            
              </div>
            </div>

            <div className='col-md-12 col-lg-12 col-sm-12 ' >
           
              <div className='row'>



                {
                  feature.map((val, index) => {
                    return (



                      <>


                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 mx-auto my-3 " key={index}>
                          <div className='row'>

                            <WhyChooseUs
                              id={val.id}
                              icon={val.icon}
                              title={val.title}

                            />
                          </div>
                        </div>
                      </>
                    )
                  }



                  )
                }
              </div></div>

          </div>
        </div>
        <hr />

        <div className='container-fluid testonimal'>


          <div className='col-md-12'>



           


            <div className='row'>
                <div className='col-md-12 col-lg-6 col-sm-12 p-5'>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators py-5">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1" style={{color:'black'}}></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='bg-dark'  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  className= 'bg-dark ' aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner"> 
    <div class="carousel-item active py-3" data-bs-interval="500">
    <Testimonials/>
     </div>
    <div class="carousel-item py-3" data-bs-interval="500">
    <Testimonials/>
      
    </div>
    <div class="carousel-item py-3" data-bs-interval="500">
    <Testimonials/>
    </div>
  </div>
  
</div>
                </div>
            </div>

          </div>
       </div>




       {/* <div className='container'>

        <SimpleSlider/>

       </div> */}


<br/><br/><br/><br/>

       <div className="slider-container">
        <div className='co-md-12 col-lg-12 col-sm-12'>
          <div className='row'>
          <h1 className='text-center ' style={{color:'rgb(6, 71, 6)'}}> Organic Blog </h1>
          <h4 className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nesciunt?</h4>
          </div>


        </div>
        


     
      
      
<div className='col-md-12 col-lg-12 col-sm-12 mt-5'>


<OrganicBlogComponent />
</div>





    </div>




   


    <br/><br/><br/><br/><br/><br/>

  
    <Footer/>
      </>
    )
  }
}
