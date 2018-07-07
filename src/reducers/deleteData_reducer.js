import { DELETE_DATA } from "../actions/deleteData_action";

export default (state = {}, action) => {
	switch (action.type) {
		case DELETE_DATA:
			return { ...state };

		default:
			return state;
	}
};
