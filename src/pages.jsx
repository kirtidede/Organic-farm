import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Resizable from './SimpleSlider'
import SimpleSlider from './SimpleSlider'
import Footer from './Footer'



export default class Pages extends Component {
  render() {
    return (
      <>


  
        <div className='container'>
          <div className='col-md-12 col-sm-12 col-lg-12 '>
            <div className='row '><br /><br />
              <h1 className='pt-5  mt-5 font-primary' style={{ textAlign: 'left' }}>About Us</h1>
              <br />
              <span className='d-flex'>
                <h5 className='coloum1 '><NavLink to='/' className='nav-link mx-1' style={{ textDecoration: 'none' }}>Home </NavLink></h5><i class="fa-solid fa-angle-right mt-1 mx-1"></i><h5 className='text-secondary mx-1'>About Us</h5>

              </span>
            </div>


            <br />
            <div className='row '><center>

              <img src='./images/about_bg.jpg' className='' style={{ height: '500px', width: '440px' }} alt='aboutus' />

            </center>
            </div>



          </div>

          <br /><br /><br />

          <div className='col-md-12 col-sm-12 col-lg-12 pt-5 mt-5'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-lg-6'>

                <h3 className='p-2 heading'>Our Mission</h3>

                <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis odio. In pulvinar ex vitae viverra aliquam.  Aliquam erat volutpat. Ut at vulputate diam, posuere interdum risus. Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
              </div>


              <div className='col-md-12 col-sm-12 col-lg-6'>

                <h3 className='p-2 heading '>Our Vision</h3>

                <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis odio. In pulvinar ex vitae viverra aliquam.  Aliquam erat volutpat. Ut at vulputate diam, posuere interdum risus. Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
              </div>


            </div>
          </div>
        </div>


        <div className='container mt-5 pt-5' >
          <div className="row">
            <div class="col-md-12 col-sm-12 col-lg-12 ">
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12 text-center '>


                  <h1 className='heading' >Our Values</h1>
                  <h5 className='text-secondary fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, adipisci.</h5>
                </div> </div>



              <div className='row  mt-5 pt-2'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                  <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-6 p-4'>

                      <h3 className='p-2 name'>Talented People</h3>

                      <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet,   Quisque id sagittis odio. In pulvinar ex vitae viverra aliquam.  Ut at vulputate diam, posuere interdum risus. Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
                 </div>


                    <div className='col-md-12 col-sm-12 col-lg-6 p-4'>

                      <h3 className='p-2 name'>Client-centric mindset</h3>

                      <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet,   Quisque id sagittis odio. In pulvinar ex vitae viverra aliquam.  Ut at vulputate diam, posuere interdum risus. Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
                  </div>


                  </div>
                </div>
              </div>

<br/>

              <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                  <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-6 p-4'>

                      <h3 className='p-2 name'>Thinking out-of-the-box</h3>

                      <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
                    </div>


                    <div className='col-md-12 col-sm-12 col-lg-6 p-4'>

                      <h3 className='p-2 name'>Sustainable development</h3>

                      <p className='p-3 text-secondary fs-5'>Lorem ipsum dolor sit amet,   Quisque id sagittis odio. In pulvinar ex vitae viverra aliquam.  Ut at vulputate diam, posuere interdum risus. Etiam mollis, sapien quis pulvinar tempus, massa mi vestibulum tellus, in aliquam sem eros quis enim.</p>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




        <div className='container testonomial_bg'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-lg-12'>
                






           <SimpleSlider/>

            </div>
          </div>

        </div>


<br/><br/>

<div className='container mt-5 pt-5'>
  <div className='row'>
    <div className='col-md-12 col-sm-12 col-lg-12'>
      <Footer/>


 

    </div>
  </div>
</div>


      </>

    )
  }
}
