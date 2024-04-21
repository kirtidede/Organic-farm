//components/SearchComponent.js
import React from 'react';

function SearchComponent({ searchProduct, productSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1 className='heading'>Shopping Cart</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search for OrganicProducts..."
					value={searchProduct}
					onChange={productSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;
