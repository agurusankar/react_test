import { POST_DATA } from "../actions/postData_action";

export default (state = {}, action) => {
	switch (action.type) {
		case POST_DATA:
			return { ...state };

		default:
			return state;
	}
};
