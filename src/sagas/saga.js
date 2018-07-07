import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_DATA, receiveData } from "../actions/getData_action";
import { POST_DATA } from "../actions/postData_action";
import { DELETE_DATA } from "../actions/deleteData_action";
import { UPDATE_DATA } from "../actions/updateData_action";

const hostName = process.env.REACT_APP_HOST_NAME;

const fetchData = async () => {
  try {
    const response = await fetch(`http://${hostName}/api/v1/todo/note/`);
    const getResponse = await response.json();
    return getResponse;
  } catch (e) {
    console.log(e);
  }
};

const addData = async (data) => {
  try {
    const dataJson = JSON.stringify(data);
    const response = await fetch(`http://${hostName}/api/v1/todo/note/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataJson,
    });
    const postResponse = await response.json();

    return postResponse;
  } catch (e) {
    console.log(e);
  }
};

const changeData = async (data) => {
  try {
    const dataJson = {};
    dataJson.item = JSON.stringify(data.item);
    const response = await fetch(
      `http://${hostName}/api/v1/todo/note/${data.id}/`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: dataJson.item,
      },
    );
    const putResponse = await response.json();
    return putResponse;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (data) => {
  try {
    data.toString();
    const response = await fetch(
      `http://${hostName}/api/v1/todo/note/${data}/`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};



function* postData(action) {
  try {
    yield call(addData, action.payload);
    const getList = yield call(fetchData);
    yield put(receiveData(getList));
  } catch (e) {
    console.log(e);
  }
}

function* deleteData(action) {
  try {
    yield call(removeData, action.payload);
    const getList = yield call(fetchData);
    yield put(receiveData(getList));
  } catch (e) {
    console.log(e);
  }
}

function* updateData(action) {
  try {
    yield call(changeData, action.payload);
    const getList = yield call(fetchData);
    yield put(receiveData(getList));
  } catch (e) {
    console.log(e);
  }
}

export function* getDataApi() {
  yield takeLatest(REQUEST_DATA, getData);
}

export function* postDataApi() {
  yield takeLatest(POST_DATA, postData);
}

export function* deleteDataApi() {
  yield takeLatest(DELETE_DATA, deleteData);
}

export function* updateDataApi() {
  yield takeLatest(UPDATE_DATA, updateData);
}
