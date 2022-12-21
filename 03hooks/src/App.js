//use reducer is used with complex states.

import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

//AppData.js
export const initialState = {
  title: 'This is the Title of the Body',
  body: 'This is a perfect and beautiful body',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ChangeTitle': {
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

//AppContext.js
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

//H1.jsx
export const H1 = () => {
  const context = useContext(Context);
  //console.log(context.state);
  return <h1>{context.state.title}</h1>;
};

//Parag.jsx
export const Parag = () => {
  const context = useContext(Context);
  return <p>{context.state.body}</p>;
};

//Btn.jsx
export const Btn = () => {
  const input = useRef(null); //initiates this referencing null.
  const context = useContext(Context);
  return (
    <>
      <button onClick={() => context.changeTitle(input.current.value)}>Change Title</button>
      <p>
        <input ref={input} />
      </p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <AppContext>
        <div>
          <H1 />
          <Parag />
          <Btn />
        </div>
      </AppContext>
    </div>
  );
}

export default App;
