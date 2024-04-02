import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Sidenav from './Sidenav';
import FeaturedProduct from './FeaturedProduct';
import Footer from './Footer';

export default class Shop extends Component {
  render(
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



    ]
  ) {
    return (
      <>


        <div className='container'>
          <div className='col-md-12 col-sm-12 col-lg-12 '>
            <div className='row '><br /><br />
              <h1 className='pt-5  mt-5 font-primary' style={{ textAlign: 'left' }}>Shop Now..</h1>
              <br />
              <span className='d-flex'>
                <h5 className='coloum1 '><NavLink to='/' className='nav-link mx-1' style={{ textDecoration: 'none' }}>Home </NavLink></h5><i class="fa-solid fa-angle-right mt-1 mx-1"></i><h5 className='text-secondary mx-1'>Shop </h5>

              </span>
            </div>


            <br />




          </div>

          <br /><br /><br />

          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-lg-12 '>
                <div className='row'>
                  <div className='col-md-3 col-sm-3 col-12 '>
                    <div className='card'>
                      <div className=' list py-3' >
                        <div class="input-group flex-nowrap">
                          {/* <span class="input-group-text" id="addon-wrapping"><i class='bi bi-search'></i></span> */}
                          <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" />
                        </div>

                        <h5 className='py-1 px-3'><a href=''>Lemond    (96)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Tomato    (90)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Lettuse   (8)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Potato    (06)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Mushroom  (56)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Bananad   (76)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Apple     (86)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Bean      (25)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Carrot    (26)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Corn      (80)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Grapes    (90)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Cherry    (96)</a></h5>
                        <h5 className='py-1 px-3'><a href=''>Brocolie  (96)</a></h5>


                      </div>
                    </div>
                  </div>



                  <div className='col-md-9 col-sm-9 col-lg-9 '>

                    <div className='row'>
                      <div className='col-md-12 col-sm-12 col-lg-12'>
                        <span d-flex>
                          <h5>
                            Showing 1–12 of 126 results</h5>
                          Sort by:
                          <select name="Average" id="" class="form-control">
                            <option>Popularity</option>
                            <option>Awerage Rating</option>
                            <option>Newly Added</option>
                            <option>Price:High to low</option>
                            <option>Price:Low to high</option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className='container '>
                      <div className='col-md-12 col-sm-12 col-lg-12' >
                        <div className='row'>
                          {

                            featuredproduct.map((val, index, array) => {
                              return (

                                <>


                                  <div className="col-md-6 col-sm-6  col-lg-4 mx-auto my-3 " key={index}>
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
                      </div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-lg-12'>
              <Footer/></div>          </div>
        </div>

      </>
    )
  }
}
