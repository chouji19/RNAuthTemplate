import axios from 'axios';
import { API_URL } from '../Constants';

const backApi = axios.create({
	baseURL: API_URL,
});

export const tokenAuth = (token: string) => {
	if (token) {
		backApi.defaults.headers.common.Authorization = `Bearer ${token}`;
	} else {
		delete backApi.defaults.headers.common.Authorization;
	}
};

export default backApi;
