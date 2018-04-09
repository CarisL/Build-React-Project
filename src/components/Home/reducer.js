import {
	GET_LATEST_REQUEST,
	GET_LATEST_SUCCESS,
	GET_LATEST_FAIL
} from './actions';

const initState = {
	isLoading: false,
	payload: {},
	errorMsg: ''
};

export const NAME = 'HOME';

export default function reducer(state = initState, action) {
	console.log(action);
	switch (action.type) {
	case GET_LATEST_REQUEST:
		return {
			...state,
			isLoading: true,
			payload: {},
			errorMsg: ''
		};
	case GET_LATEST_SUCCESS:
		return {
			...state,
			isLoading: false,
			payload: action.payload,
			errorMsg: ''
		};
	case GET_LATEST_FAIL:
		return {
			...state,
			isLoading: false,
			payload: {},
			errorMsg: '请求错误'
		};
	default:
		return state;
	}
}
