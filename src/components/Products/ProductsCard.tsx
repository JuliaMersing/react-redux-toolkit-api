import React from 'react';
import { Product } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface ProductPropsCard {
	product: Product;
}

export const ProductsCard: React.FC<ProductPropsCard> = ({ product }) => {
	return (
		<div className="contained-card">
			<h2 className="text-lg font-bold mb-2">{product.title}</h2>
			<img
				src={product.images[0]}
				alt={product.title}
				className="w-20 h-20 mx-auto rounded-full"
			/>
			<p className="mt-2">{product.price}$</p>
			<div className="flex justify-end">
				<FontAwesomeIcon
					icon={faShoppingCart}
					className="action-icon edit-icon text-indigo-600 mt-2 mr-2"
				/>
			</div>
		</div>
	);
};
