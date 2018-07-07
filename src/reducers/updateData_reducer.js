import { UPDATE_DATA } from "../actions/updateData_action";

export default (state = {}, action) => {
	switch (action.type) {
		case UPDATE_DATA:
			return { ...state };

		default:
			return state;
	}
};
