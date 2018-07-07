import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import App from "./containers/App";

import {
	getDataApi,
	postDataApi,
	deleteDataApi,
	updateDataApi,
} from "../src/sagas/saga";
import reducer from "../src/reducers";
import "../src/css/main.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(updateDataApi);
sagaMiddleware.run(postDataApi);
sagaMiddleware.run(deleteDataApi);
sagaMiddleware.run(getDataApi);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);

