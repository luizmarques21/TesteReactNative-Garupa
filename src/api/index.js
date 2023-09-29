import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api.punkapi.com/v2',
	timeout: 20000,
});

export default class Api {
	static getBeersList(page = 1) {
		return axiosInstance.get(`/beers?page=${page}`);
	}

	static getBeerInfo(beerId) {
		return axiosInstance.get(`/beers/${beerId}`);
	}
}
