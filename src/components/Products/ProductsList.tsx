import React from 'react';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import { Product } from './type';
import { Header } from '../Header/Header';
import { ProductsCard } from './ProductsCard';

export const ProductsList: React.FC = () => {
	const { data } = useGetAllProductsQuery('products');

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container-form">
			<div className="container-header">
				<Header heading="Best Sellers" />
				<div className="container-card-list">
					{data.products.map((product: Product) => (
						<ProductsCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};
