export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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
