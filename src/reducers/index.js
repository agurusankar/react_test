import { combineReducers } from "redux";
import getDataReducer from "./getData_reducer";
import postDataReducer from "./postData_reducer";
import deleteDataReducer from "./deleteData_reducer";
import updateDataReducer from "./updateData_reducer";

export default combineReducers({
	updateDataReducer,
	postDataReducer,
	deleteDataReducer,
	getDataReducer,
});
