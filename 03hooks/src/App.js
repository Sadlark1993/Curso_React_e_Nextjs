//use reducer is used with complex states.
import { useReducer } from 'react';
import './App.css';

const initialState = {
  title: 'This is the Title of the Body',
  body: 'Goat in portuguese is "bode".',
  counter: 0,
};

//function reducer(state, action) will be called when the dispatch function is executed.
const reducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      return { ...state, title: 'The Title has Changed: ' + action.payload };
    }
    //if you are going to declare any variable inside a switch-case, wrap the case with braces '{}'
    case 'invert': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  /*the dispatch(action) function will call the reducer(state, action) function. The return of the
    reduce function is the new state.*/
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{state.title}</h1>
      <p>{state.body}</p>
      <button onClick={() => dispatch({ type: 'invert' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleString('pt-BR') })}>Change</button>
    </div>
  );
}

export default App;
