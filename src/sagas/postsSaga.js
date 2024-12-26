import {call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from "../features/posts/postsSlice";

const dummyPostsURL = "https://jsonplaceholder.typicode.com/posts";

function* fetchPosts() {
    try {
        const response = yield call(axios.get, dummyPostsURL);
        yield put(fetchPostsSuccess(response.data));
    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }
}

export function* watchFetchPosts() {
    yield takeLatest(fetchPostsRequest.type, fetchPosts);
}
