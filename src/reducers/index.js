import {merge} from 'ramda';
import { combineReducers } from 'redux';
import { GET_ALL_USERS, RECEIVE_USERS } from '../actions';
import { GET_ALL_POSTS, RECEIVE_POSTS } from '../actions';

function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return state;

    case RECEIVE_USERS:
      return merge(state, action.payload);

    default:
      return state;
  }
};

function posts(state = {}, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return state;

    case RECEIVE_POSTS:
      return merge(state, action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  users,
  posts,
});
