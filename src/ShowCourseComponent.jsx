//components/ShowCourseComponent.js
import React from 'react';

function ShowProductComponent({ courses,
	filterProductFunction,
	addToCartFunction }) {
	return (
		<div className='row'>
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12  my-3 ">

				<div className="product-list">
					<div className="col-md-12 my-3  ">

						{
							filterProductFunction.length === 0 ? (
								<p className="no-results">
									Sorry , No matching Product found.
								</p>
							) :
								(
                                     









									filterProductFunction.map((product) => (
										<div className="product mx-auto text-center rounded my-3  w-75" key={product.id} >

											<div className="col-md-12 col-lg-12 col-sm-12 ">
												<div className="row">
													<div className="col-md-12 col-lg-12 col-xl-4 col-sm-12">
											<img src={product.image} alt={product.name} className='mt-5'/>
											</div>
											<div className="col-md-12 col-lg-12  col-xl-4  col-sm-12">
											<h2 className='pt-5 heading'>{product.name}</h2>
											<p className='name'>Price: ₹{product.price}</p>
											<button
												className="add-to-cart-button name"
												onClick={() => addToCartFunction(product)}
											>
												Add to  Cart
											</button>
											</div>
											
										    <div className="col-md-12 col-lg-12 col-xl-4  col-sm-12">
											<p className='py-5 name'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Accusantium commodi aut earum voluptas culpa labore.</p>
											</div>
											</div>
											</div>
										</div>

									)
// ********************************************************************************************************************
										// <div class="card mb-3 " style={{ maxwidth: '700px' }}>
										// 	<div className="product" key={product.id}>
										// 		<div class="row g-0">
										// 			<div className="col-md-12 ">
										// 				<span className='d-flex'>
										// 				<div class="col-md-4">
										// 					<div class="card-header" >
										// 						<img src={product.image} className="img-fluid rounded-start" alt={product.name} />


										// 					</div> </div>
										// 				<div class="col-md-8">
										// 					<div class="card-body">
										// 						<h5 class="card-title">{product.name}</h5>
										// 						<p class="card-text"><small classname="text-muted">Last updated 3 mins ago</small></p>

										// 						<button
										// 							className="add-to-cart-button"
										// 							onClick={() => addToCartFunction(product)}
										// 						>
										// 							Add to Shopping Cart
										// 						</button>
										// 					</div>
										// 				</div>
										// 			</span>
										// 		</div>
										// 	</div>
										// </div>
										// </div>
					)


					)


					

						}
				</div>
			</div>
		</div>
		</div >

	);
}

export default ShowProductComponent;
