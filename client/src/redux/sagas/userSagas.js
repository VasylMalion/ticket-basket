/// core
import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'

// constants
import {FETCHED_USER} from "../constants";

// actions
import {
    requestUser,
    requestUserFailed,
    requestUserSucceeded
} from "../actions/actions";

// planes tickets saga
export function* watchFetchUser() {
    yield takeEvery(FETCHED_USER, fetchUserAsync);
}

function* fetchUserAsync(data) {

    const {payload} = data

    try {
        yield put(requestUser());
        const data = yield call(() => {
                return axios.post("http://localhost:3050/api/user", {
                    _id: payload
                }).then(data => data.data)
            }
        );
        yield put(requestUserSucceeded(data));
    } catch (error) {
        yield put(requestUserFailed());
    }
}
