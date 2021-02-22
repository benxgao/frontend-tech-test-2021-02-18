/* eslint-disable no-constant-condition */

import { put, call, fork, takeLatest, all } from 'redux-saga/effects';
import { GET_ALL_POSTS, RECEIVE_POSTS} from '../actions';
import { postApi } from '../services/api';

export function* getPosts() {
  const postList = yield call(postApi.getAllPosts);
  yield put({ type: RECEIVE_POSTS, payload: {posts: postList} });
};

export function* watchGetPosts() {
  yield takeLatest(GET_ALL_POSTS, getPosts);
};

export default function* root() {
  yield all([
    fork(watchGetPosts),
  ]);
};
