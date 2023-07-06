//context
import PropTypes from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //useRef() to prevent a infinite loop when the action is called inside a useEffect(()=>action(),[action]).
  //The useRef() 'vars', are not changed when the page is rerendered.
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined')
    throw new Error('You have to use "useCounterContext" inside "<CounterContextProvider/>".');

  return [...context];
};

CounterContextProvider.propTypes = {
  children: PropTypes.node,
};
