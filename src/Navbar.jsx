import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from './About'
export default class Navbar extends Component {
  render() {
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


        <div className='container'>
        <div className='row'>
          <div  className='col-md-12'>
        <nav className='navbar navbar-expand-lg  fw-bold text-dark py-2 '>

       
          <a href='' className="navbar-brand" style={{ marginLeft: '200px' }}>


            <img src='images/logo.png' height={'40px'} />
          </a>

          <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        
          <ul className='navbar-nav mr-auto navbar-collapse ' id="navbarSupportedContent"> 
            
         
              <li className='navbar-item active'><NavLink to='/' className='nav-link  fw-normal mx-2 fs-5 navcolor1' style={{color:'rgb(6, 71, 6)' }}>Home</NavLink>

            
              </li>

           
             
            
              <li className='navbar-item'><NavLink to='/pages' className='nav-link  mx-2 fw-normal fs-5 navcolor '  style={{color:'rgb(6, 71, 6)' }}>About us</NavLink>



                

              </li>
           
          
          
            



           
              <li className='navbar-item'><NavLink to='/shop' className='nav-link  mx-2 fw-normal fs-5 navcolor' style={{color:'rgb(6, 71, 6)' }}>Shop</NavLink>


                
              </li>
              <li className='navbar-item'><NavLink to='/blog' className='nav-link  mx-2 fw-normal fs-5 navcolor' style={{color:'rgb(6, 71, 6)' }}>Blog</NavLink>


                
</li>

           




            
            {/* <div class="dropdown">
              <li className='navbar-item'><NavLink to='/blog' className='nav-link  mx-2 fw-normal fs-5 navcolor' data-bs-toggle="dropdown">Blog</NavLink>
                <ul class=" dropdown-menu " >
                  <li><a href="#" class="dropdown-item py-2 navcolor " >Listing</a></li>
                  <li><a href="#" class="dropdown-item py-2 navcolor" >single</a></li>
                  <li><a href="#" class="dropdown-item py-2 navcolor" >Post Types</a></li>
                  

                  <li>
      <a class="dropdown-item" href="#">
        Submenu &raquo;
      </a>
      <ul class="dropdown-menu dropdown-submenu">
        <li>
          <a class="dropdown-item" href="#">Submenu item 1</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 2</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
          <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#">Multi level 1</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Multi level 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 4</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Submenu item 5</a>
        </li>
      </ul>
    </li>

                </ul>
              </li>
            </div> */}



          </ul>
        
        </nav >




        </div>
        </div></div>





        
{/* 8888888888888888888888888888888888888 */}



{/* 88888888888888888888888888888888888888888888 */}

      </>
    )
  }
}
