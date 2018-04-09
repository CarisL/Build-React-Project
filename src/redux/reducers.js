import home from '../components/Home/reducer';

export default function combineReducers(state = {}, action) {
	return {
		home: home(state.home, action)
	};
}
