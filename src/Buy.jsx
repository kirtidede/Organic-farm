//App.js

import React, { useState } from 'react';
import './App1.css';

import SearchComponent from './SearchComponent';
import UserCartComponent from './UserCartComponent';
import ShowProductComponent from './ShowCourseComponent';

function Buy() {
	const [courses, setCourses] = useState([
		{
		  id: 1,
		  name: "Organic Lettuce",
		  image: "images/category-11-400x400.jpg",
		  price: "$13.50"
		},
		{
		  id: 2,
		  name: "Organic Tomato",
		  image: "images/category-12-400x400.jpg",
		  price: "$3.50"
		},
		{
		  id: 3,
		  name: "Organic Lemon",
		  image: "images/category-13-400x400.jpg",
		  price: "$4.20"
		},
		{
		  id: 4,
		  name: "Organic Potato",
		  image: "images/category-10-400x400.jpg",
		  price: "$12.40"
		},
		{
		  id: 5,
		  name: "Organic Mushroom",
		  image: "images/category-9-400x400.jpg",
		  price: "$15.40"
		},
		{
		  id: 6,
		  name: "Organic Banana",
		  image: "images/category-8-400x400.jpg",
		  price: "$4.40"
		},
		{
		  id: 7,
		  name: "Organic Apple",
		  image: "images/category-7-400x400.jpg",
		  price: "$5.40"
		},
		{
		  id: 8,
		  name: "Organic Bean",
		  image: "images/category-6-400x400.jpg",
		  price: "$15.00"
		}
  
  
  
	]);
// 	const [courses, setCourses] = useState([
// 		{ id: 1, 
// 		name: 'GFG T-shirt', 
// 		price: 499, 
// 		image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
// 		},
// 		{ id: 2, 
// 		name: 'GFG Bag', 
// 		price: 699, 
// 		image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
// 		},
// 		{ id: 3, 
// 		name: 'GFG Hoodie', 
// 		price: 799, 
// 		image: 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
// 		}
// 	]);

	const [cartProducts, setCartProducts] = useState([]);
	const [searchProduct, setSearchProduct] = useState('');

	const addToCartFunction = (OrganicProducts) => {
		const alreadyBuy = cartProducts
							.find(item => item.product.id === OrganicProducts.id);
		if (alreadyBuy) {
			const latestCartUpdate = cartProducts.map(item =>
				item.product.id === OrganicProducts.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartProducts(latestCartUpdate);
		} else {
			setCartProducts([...cartProducts, {product: OrganicProducts, quantity: 1}]);
		}
	};

	const deleteFromCartFunction = (OrganicProducts) => {
		const updatedCart = cartProducts
							.filter(item => item.product.id !== OrganicProducts.id);
		setCartProducts(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartProducts
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const productSearchUserFunction = (event) => {
		setSearchProduct(event.target.value);
	};

	const filterProductFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchProduct.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchProduct={searchProduct} 
							productSearchUserFunction=
								{productSearchUserFunction} />
					<div className='col-md-12 col-sm-12 col-lg-12'>
						<div className="row">
			<main className="App-main">
		

			
                    
				<ShowProductComponent
					courses={courses}
					filterProductFunction={filterProductFunction}
					addToCartFunction={addToCartFunction}
				/>
			

				<UserCartComponent
					cartProducts={cartProducts}
					deleteFromCartFunction={deleteFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartProducts={setCartProducts}
				/>


			</main>
			</div>
			</div>
		</div>
	);
}

export default Buy;
