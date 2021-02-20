export const GET_ALL_USERS = 'GET_ALL_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function loadUserPage() {
  return {
    type: GET_ALL_USERS,
  }
};

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  }
};

export function loadPostPage() {
  return {
    type: GET_ALL_POSTS,
  }
};

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    payload: posts,
  }
};
