import fetch from 'isomorphic-fetch';
import {API_GET_POSTS} from '../constants';
import postsData from '../../db.json';

export const postApi = {
  getAllPosts: async () => {
    /**
     * Fake API is not supporting private repo at the moment. 
     * 
     * The fetching approach could be replaced by:
     * const allPosts = await fetch(API_GET_POSTS).then(response => response.json());
     */
    const allPosts = await postsData['posts'];

    return allPosts;
  },
};
