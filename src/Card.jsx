import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Card = (props) => {
    /** In props will be all values which are in cards array **/
    console.log('Card props', props);
      
    return (
   
      <card className='card mb-3' style={{borderRadius:'5%',boxshadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}> 
          <div className='col-md-12'>
       <div
         style={{
            display: 'flex',
            flexDirection: 'column',
           
            /** Add wrapper to card and path to styles={props.style} for correct displaying **/
            ...props.style,
          }}
        >
          <div class="card-head">
          <img
            src={props.imageSrc}
            height={'200px'}
            width={'100%'}
            className='cars-img img-fluid'
            /** Also add width and maxWidth for image if it's large **/
            style={{ objectFit: 'cover', width: props.width, maxWidth: props.maxWidth }}
          
          />
          </div>
          <NavLink to='/pages' className='nav-link  mx-2 fw-normal fs-5 navcolor '>
          <div className='text-center fw-normal card-body' style={{fontSize: '18px', fontWeight: 700, color: '#386416' }}>
           <span>{props.name}</span> 
             <br/>
           <span style={{ color: 'rgba(82, 40, 8, 0.724)'}}>  {props.number}</span>
          </div></NavLink>
       </div>
       </div>
       </card>
       





    );
  };

  export default Card