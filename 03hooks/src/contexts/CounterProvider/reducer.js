import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log('counter incremented');
      return { ...state, counter: state.counter + 1 };
    }
  }

  console.log('iiii');
  return { ...state };
};
