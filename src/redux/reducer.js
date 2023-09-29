import { INCREMENT_LIST, CLEAR_LIST, INCREMENT_PAGE } from './action';

const initialState = {
	beerList: [],
	page: 1,
};

const beerListReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_LIST: {
			return {
				...state,
				beerList: [...state.beerList, ...action.payload],
			};
		}
		case INCREMENT_PAGE: {
			return {
				...state,
				page: state.page + 1,
			};
		}
		case CLEAR_LIST: {
			return initialState;
		}
		default:
			return state;
	}
};

export default beerListReducer;
