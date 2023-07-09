import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { store } from './features/store';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { ProductsList } from './components/Products/ProductsList';
import { productsApi } from './features/apiSlice';

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Provider store={store}>
				<ApiProvider api={productsApi}>
					<BrowserRouter>
						<ToastContainer />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signUp" element={<SignUp />} />
							<Route path="/products" element={<ProductsList />} />
						</Routes>
					</BrowserRouter>
				</ApiProvider>
			</Provider>
			,
		</>
	);
};
