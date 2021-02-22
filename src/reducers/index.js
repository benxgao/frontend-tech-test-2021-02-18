import { combineReducers } from 'redux';
import { GET_ALL_POSTS, RECEIVE_POSTS } from '../actions';

function posts(state = [], action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return state;

    case RECEIVE_POSTS:
      return action.payload.posts;

    default:
      return state;
  }
};

export default combineReducers({
  posts,
});
