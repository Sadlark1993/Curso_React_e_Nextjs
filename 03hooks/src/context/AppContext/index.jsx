//AppContext.js
import { createContext, useReducer } from 'react';
import P from 'prop-types';

import { reducer } from './reducer';
import { initialState } from './AppData';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);

  //encapsulate the dispatch function.
  const changeTitle = (payload) => {
    dispatch({ type: 'ChangeTitle', payload: payload });
  };

  //always remember to destructure the object of the value.
  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node.isRequired,
};
