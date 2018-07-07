import { RECEIVE_DATA, REQUEST_DATA } from "../actions/getData_action";

export default (state = {}, action) => {
	switch (action.type) {
		case REQUEST_DATA: {
			return { ...state };
		}
		case RECEIVE_DATA: {
			const data = Object.assign({}, action.payload);
			return { data };
		}
		default: {
			return state;
		}
	}
};
