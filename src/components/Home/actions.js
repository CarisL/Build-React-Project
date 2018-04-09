import axios from 'axios';
import store from '../../redux/store';

export const GET_LATEST_REQUEST = 'NEW/GET_LATEST_REQUEST';
export const GET_LATEST_SUCCESS = 'NEW/GET_LATEST_SUCCESS';
export const GET_LATEST_FAIL = 'NEW/GET_LATEST_FAIL';

export const getLatestRequest = () => {
	return {
		type: GET_LATEST_REQUEST
	};
};

export const getLatestSuccess = latest => {
	return {
		type: GET_LATEST_SUCCESS,
		payload: latest
	};
};

export const getLatestFail = error => {
	return {
		type: GET_LATEST_FAIL,
		error
	};
};

export const getNews = () => {
	return dispatch => {
		dispatch(getLatestRequest());

		axios
			.get('/zhihu/news/latest')
			.then(function(response) {
				dispatch(getLatestSuccess(response.data));
			})
			.catch(function(error) {
				dispatch(getLatestFail(error));
			});
	};
};
