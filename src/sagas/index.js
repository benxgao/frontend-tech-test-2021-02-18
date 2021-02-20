/* eslint-disable no-constant-condition */

import { put, call, fork, takeLatest, all } from 'redux-saga/effects';
import {GET_ALL_USERS, RECEIVE_USERS, GET_ALL_POSTS, RECEIVE_POSTS} from '../actions';
import { userApi, postApi } from '../services/api';

export function* getUsers() {
  const userList = yield call(userApi.getAllUsers);

  yield put({ type: RECEIVE_USERS, payload: userList });
};

export function* watchGetUsers() {
  yield takeLatest(GET_ALL_USERS, getUsers);
};

export function* getPosts() {
  const postList = yield call(postApi.getAllPosts);

  yield put({ type: RECEIVE_POSTS, payload: postList });
};

export function* watchGetPosts() {
  yield takeLatest(GET_ALL_POSTS, getPosts);
};

export default function* root() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetPosts),
  ]);
};
