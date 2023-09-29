import { put, call, takeEvery } from 'redux-saga/effects';
import Api from '../api';
import { GET_LIST, INCREMENT_LIST } from './action';

export default function* getBeerListSaga() {
	yield takeEvery(GET_LIST, fetchBeerList);
}

function* fetchBeerList(action) {
	try {
		const response = yield call(Api.getBeersList, action.payload);
		yield put({ type: INCREMENT_LIST, payload: response.data });
	} catch (err) {
		console.log(err);
	}
}
