import * as types from './types';

//the job of the reducer is to change the state. The action make all the work before it
export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(types.POSTS_SUCCESS);
      return { ...state, posts: action.payload, loading: false };
    }
    case types.POSTS_LOADING: {
      console.log(types.POSTS_LOADING);
      return { ...state, loading: true };
    }
  }

  console.log('Action type not recognized');

  return { ...state };
};
