import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from './About'
import Cart from './Cart'




import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


function Navbar  ()
{
 
    return (
      <>
      <div className='container'>
        <div className='row'>
          <div  className='col-md-12'>
        <nav className='navbar navbar-expand-lg  navbar-light text-secondary'>
          <h5 className='m-auto fs-6'><i class="fa-solid fa-headset mx-2"></i>+1800-1800-1800</h5>

          <ul className='navbar-nav m-auto'>
            <li><i class="fa-solid fa-magnifying-glass mx-3"></i>Search</li>
            <li><i class="fa-solid fa-user-group mx-3"></i>Account</li>
            <li><i class="fa-solid fa-globe mx-3" ></i> English</li>
          </ul>

        </nav>
</div>
        </div></div>

        {/* ******************************************************************** */}





       

{/* ***************************************************************************** */}

        <div className='container'>
        <div className='row'>
          <div  className='col-md-12'>
          <span className='d-flex'>
        <nav className='navbar navbar-expand-lg  fw-bold text-dark py-2 '>

       
          <a href='' className="navbar-brand" >


            <img src='images/logo.png' height={'40px'} />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <div class="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className='navbar-nav mr-auto  ' id="navbarSupportedContent"> 
            
         
              <li className='navbar-item active'><NavLink to='/' className='nav-link  fw-normal mx-2 fs-5 navcolor1' style={{color:'rgb(6, 71, 6)' }}>Home</NavLink>

            
              </li>

           
             
            
              <li className='navbar-item'><NavLink to='/pages' className='nav-link  mx-2 fw-normal fs-5 navcolor '  style={{color:'rgb(6, 71, 6)' }}>About us</NavLink>



                

              </li>
           
          
          
            



           
              <li className='navbar-item'><NavLink to='/shop' className='nav-link  mx-2 fw-normal fs-5 navcolor' style={{color:'rgb(6, 71, 6)' }}>Shop</NavLink>


                
              </li>
              <li className='navbar-item'><NavLink to='/blog' className='nav-link  mx-2 fw-normal fs-5 navcolor' style={{color:'rgb(6, 71, 6)' }}>Blog</NavLink>


                
</li>

           




            
           



          </ul>
        </div>



       


       
<div class="accordion mx-5" id="accordionExample" >
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span className='d-flex pt-1 ' style={{color:'rgb(6, 71, 6)'}}>
           <i class="fa-solid fa-bag-shopping fs-6 me-4 ms-2 "></i>
           <h6 className='fs-6 me-2'>$31.40 / 3 items</h6>
             
           </span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <Cart/>
      </div>
    </div>
  </div>
  
  
</div>
        </nav >
       
</span>




        </div>
        </div></div>





        


      </>
    )
  }

export default Navbar