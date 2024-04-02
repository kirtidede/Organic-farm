import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";

function OrganicBlogComponent()


{
   

   const settings = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
              },
            },
          ]
      };
    

 
    const [data1, setData] = useState([]);


    useEffect(() => {
        var res = fetch('https://organic-blog.onrender.com/OrganicBlogComp')  
            .then((result) => result.json().then((res) =>
               
                setData(res)
            ))
    }, [])

    console.log(data1);
    return (

       
                    <>

<Slider {...settings} className='col-md-12 col-lg-12 col-sm-12 px-5  ' style={{justifycontent:'space-around'}} >

{
                                    data1.map((val) => {
                                        return (
                                            <>
                                             {/* className='col-md-12 col-lg-12 col-sm-12 px-5' */}
                                             {/* <div className="col-md-4 col-lg-4 col-sm-12">  */}
                        <card className=' p-5 OrganicBlogCmpnt '>
                            <div className="card-img px-5">
                                <img src={val.img} className="img-fluid w-100" alt='' style={{ borderRadius: '25px', height: '240px', width: '100px' }} />
                            </div>
                            <div className="card-body p-5">
                                <div className="card-title">
                                    <h4><a href="#!" style={{ textDecoration: 'none', color: 'rgb(5, 49, 5)' }}>{val.title}</a></h4>
                                    <span className="d-flex">
                                        <h5 className="text-secondary">{val.date}</h5>
                                        <h6 className="p-1 mx-1" style={{ color: 'rgba(55, 27, 8, 0.724)' }}>{val.name}</h6>
                                    </span>
                                </div>
                                <div className="card-content fs-6 text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum, beatae magnam animi tempora consectetur reprehenderit ipsa expedita a sint aspernatur, asperiores, voluptatem velit suscipit?
                                </div>
                                <div className="card-footer fs-6 pt-3" style={{ color: 'rgba(55, 27, 8, 0.724)' }}>
                                    Read More <i class="fa fa-angle-right" ></i>
                                </div>
                            </div>
                           </card>
                           {/* </div>  */}
                           </>)
                                    })
                                }

</Slider>
            
{/* ******************************************************************************************************************************************************** */}

                         
                                
                          




        </>  
    )
    
    
    
}
export default OrganicBlogComponent

