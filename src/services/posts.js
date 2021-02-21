import fetch from 'isomorphic-fetch';
import {API_GET_POSTS} from '../constants';
import postsData from '../../db.json';

export const postApi = {
  getAllPosts: async () => {
    // const allPosts = await fetch(API_GET_POSTS).then(response => response.json());

    // const allPosts = await fetch('../../db.json', {
    //   headers : {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // });

    const allPosts = await postsData['posts'];
    console.log('allPosts', allPosts);

    return allPosts;
  },
};
