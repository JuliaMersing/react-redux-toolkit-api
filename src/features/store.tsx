import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import signUpReducer from './signUpSlice';
import { productsApi } from './apiSlice';

export const store = configureStore({
	reducer: {
		register: registerReducer,
		signUp: signUpReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
