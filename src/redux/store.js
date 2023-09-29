import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import beerListReducer from './reducer';
import getBeerListSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: beerListReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(getBeerListSaga);
