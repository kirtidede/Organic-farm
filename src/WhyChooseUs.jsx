import React from 'react'

export const WhyChooseUs = (props) => {
  return (
    <>
    <div className='feature ' style={{display:'flex'}}>
              <div className='feature-icon'>
                <div className='support-icon p-2' style={{  color: 'rgba(55, 27, 8, 0.724)'}}>

                  <i>{props.icon}</i>

                </div>
              </div>
              <div className='feature-info'>
                <div className='feature-title px-5 fs-4' style={{ color:'rgb(6, 71, 6)'}}>{props.title}</div>
                <p className='feature-content px-5 fs-6 text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit
                 minima earum officia magnam minus aspernatur nisi odio voluptas amet!

                </p>
               
            </div>
            </div>
    
    </>
  )
}
