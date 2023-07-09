import React from 'react';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import { Product } from './type';

export const ProductsList: React.FC = () => {
	const { data } = useGetAllProductsQuery('products');

	if (!data) {
		return <div>Loading...</div>;
	}

	console.log(data);

	return (
		<div>
			<h1>Products</h1>
			{data.products.map((product: Product) => (
				<div key={product.id}>
					<h2>{product.title}</h2>
					<img src={product.images[0]} alt={product.title} />
					<p>{product.price}</p>
				</div>
			))}
		</div>
	);
};
