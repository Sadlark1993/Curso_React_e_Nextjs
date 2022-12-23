import * as types from './types';

export const increment = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER });
};
