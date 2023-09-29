export const INCREMENT_LIST = 'INCREMENT_LIST';
export const CLEAR_LIST = 'CLEAR_LIST';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const GET_LIST = 'GET_LIST';

export const getList = (page) => ({
	type: GET_LIST,
	payload: page,
});

export const incrementList = (beerList) => ({
	type: INCREMENT_LIST,
	payload: beerList,
});

export const incrementPage = () => ({
	type: INCREMENT_PAGE,
});

export const clearList = () => ({
	type: CLEAR_LIST,
});
