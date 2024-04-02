import React from 'react'
import Email from './email'
const Footer = () => {
  return (
   <>
   
   <div className='containe-fluid p-0'>
   <div className='footer_home py-5 'style={{width:'100%', backgroundcolor: 'rgb(188,184,138)'}}>
      <div className='col-md-12 col-lg-12 col-sm-12'>
        <div className='row'>
          <div className='col-md-12 col-lg-6 col-sm-12 coloum1 '>
          <center>
            <div className=' px-5 ' style={{height:'500px',width:'400px'}} >
           <img src='images/logo.png' alt='' className='mx-4' style={{height:'90px',width:'220px'}}></img>
            <br></br>
            <p className='pt-3 ml-3  py-2 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing .accusamus recusandae porro non velit architecto.</p>
            <h4 className='info py-2'>Address</h4>
            <h5 className='text-secondary'>241 Devonshire Street Lebanon, PA 17042</h5>

            <h4 className='info py-2'>Phone</h4>
            <h5 className='text-secondary'>+1 (859) 867-8676</h5>

            <h4 className='info py-2'>Email</h4>
            <h5 className='text-secondary'>sales@naturally.com</h5>
            </div>
            </center>
          </div>



          <div className='col-md-12 col-lg-6 col-sm-12  coloum1 '>
          <center>
            <div className=' px-5 ' style={{height:'500px',width:'400px'}} >
              <h3 style={{color:'rgb(6, 71, 6)'}}>Sign Up and Save</h3>
            <br></br>
            <p className='pt-3 ml-3  py-2 text-secondary'>Get exclusive offers, free shipping events & more by signing up for our promotional emails.</p>
           
           <Email/>
           
            <h4 className='info py-2 pt-5'>Follow Us</h4>
           <span className='social_media'>


           <button className='btn  px-3 mx-1 text-light' style={{borderRadius:'50%',backgroundColor:'#BABDA5'}}><i class="fa-brands fa-facebook-f fs-1"></i></button>
           <button className='btn p-2 mx-1 text-light' style={{borderRadius:'50%',backgroundColor:'#BABDA5'}}><i class="fa-brands fa-twitter fs-1"></i></button>
           <button className='btn  px-3 py-2 mx-1 text-light' style={{borderRadius:'50%',backgroundColor:'#BABDA5'}}><i class="fa-brands fa-instagram fs-1"></i></button>
           <button className='btn  px-3 mx-1 py-2 text-light' style={{borderRadius:'50%',backgroundColor:'#BABDA5'}}><i class="fa-brands fa-youtube fs-1"></i></button>
           </span>

      
            </div>
            </center>
          </div>




        </div>

        

      </div>
      <div className='col-md-12 col-lg-12 col-sm-12 pt-3'>
        <div className='row'>
        
         <h6 className='pt-5 copyright text-center' style={{color:"#3b7012"}}> Copyright © 2019 Natural&Organic.com. All rights reserved.</h6>
       
        </div>
      </div>

     


    </div></div>
   </>
  )
}

export default Footer