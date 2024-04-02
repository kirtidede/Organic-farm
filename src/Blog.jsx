import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import OrganicBlogComponent from './OrganicBlogComponet'
import Footer from './Footer'

export default class Blog extends Component {
  render() {
    return (
      <>
      
      
      
      <div className='col-md-12 col-sm-12 col-lg-12 '>
            <div className='row '><br /><br />
              <h1 className='pt-5  mt-5 font-primary' style={{ textAlign: 'left' }}>Organic Blog...</h1>
              <br />
              <p className='text-secondary fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsum?</p>
              <span className='d-flex'>
                <h5 className='coloum1 '><NavLink to='/' className='nav-link mx-1' style={{ textDecoration: 'none' }}>Home </NavLink></h5><i class="fa-solid fa-angle-right mt-1 mx-1"></i><h5 className='text-secondary mx-1'>Organic Blog </h5>

              </span>
            </div>


            <br />
            
        


      
      
       

       </div>
       <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
<div className='container mt-5 pt-5' >
  <div className='row'>
    <div className='col-md-12 col-sm-12 col-lg-12'>
    <div className='row'>
            <hr className='w-100'/>

            <div className='container '>
            <div className='col-md-12 col-lg-12 col-sm-12 '>
              <div className='row'><center>
              <nav class="navbar navbar-expand-lg   " >
  
   
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse nav_bar navbar-collapse " id="navbarSupportedContent">&nbsp; &nbsp;&nbsp; &nbsp;
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-normal fs-4 ">
        <li class="nav-item ms-5">
          <a class="nav-link heading" aria-current="page" href="#">SHOP</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link heading" href="#">SKILL</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link ms-5 heading" href="#" aria-disabled="true">STORIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 heading" aria-disabled="true">ABOUT </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 heading" aria-disabled="true">CONTACT US </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 heading" aria-disabled="true">REVIEW</a>
        </li>
        
      </ul>
      
    </div>
 
 
</nav></center>


              </div>
            </div>
          </div>
            <hr className='w-100'/>
          </div>
    </div>
  </div>
</div>



<div className='container mt-5 pt-5'>
  <div className='row'>
    <div className='col-md-12 col-sm-12 col-lg-12'>
      <OrganicBlogComponent/>
    </div>
  </div>
</div>



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
