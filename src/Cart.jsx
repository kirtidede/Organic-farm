import React from 'react'

const Cart = () => {
  return (
 <>
   <div className='container'>
      <div className='header-top'>
      <table class="table">

  <tbody className='fw-normal'>
    <tr className='fw-normal'>
     
      <td className=''><img src='images/product-11-100x100.jpg' className='img-fluid ' style={{width:'50px',height:'50px'}} alt=''/></td>
      <td className='text-secondary py-3'>1x</td>
      <td className='py-3 heading'>Organic D'Anjou Lettuce</td>
      <td className='py-3 name'>$3.10 </td>
      <td className='py-2'><button className='btn btn-secondary'>X</button></td>
    </tr>
    <tr className=''>
     
      <td className=''><img src='images/product-12-100x100.jpg' className='img-fluid ' style={{width:'50px',height:'50px'}} alt=''/></td>
      <td className='text-secondary py-3'>1x</td>
      <td className='py-3 heading'>Organic D'Anjou Tomato</td>
      <td className='py-3 name'>$2.10 </td>
      <td className='py-2'><button className='btn btn-secondary'>X</button></td>
    </tr>
    <tr className=''>
     
      <td className=''><img src='images/product-13-100x100.jpg' className='img-fluid ' style={{width:'50px',height:'50px'}} alt=''/></td>
      <td className='text-secondary py-3 heading'>1x</td>
      <td className='py-3 heading'>Organic D'Anjou Lemon</td>
      <td className='py-3 name'>$3.10 </td>
      <td className='py-2'><button className='btn btn-secondary'>X</button></td>
    </tr>
  </tbody>
</table>

<table className='mx-auto'>
    <tfoot className='fw-normal'> 
        <tr>
 <tr className=''>
    <td  className='heading'>Subtotal</td>
    <td className='name'>$21.70</td>
 </tr>
 <tr>
    <td  className='heading'>Shipping</td>
    <td className='name'>$10.00</td>
 </tr>
 <tr>
    <td  className='heading'>Tax</td>
    <td className='name'>$00.00</td>
 </tr>
 <tr>
    <td className='heading'>Total</td>
    <td className='name '>$31.70</td>
 </tr>
 <tr>
 <button className='btn mx-4 btn-outline-warning '><a href='./Shop' className='view_cart_btn ' >View Cart</a> </button>
    <button className='btn btn-outline-warning'> Checkout</button>
 </tr>
 </tr>

    </tfoot>
</table>
      </div>

   </div>
 
 
 
 
 </>
  )
}

export default Cart