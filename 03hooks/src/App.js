import './App.css';
import { useState, useEffect } from 'react';
//import { Component } from 'react'; //this is so when using class component.

//using function component with hooks:
function App() {
  //const[stateVariable, variableSetter] = useState(initialValue);
  //states: every time the state changes, the component is re-tenderized on screen.
  const [counter, setCounter] = useState(0);

  //componentDidUpdate().
  //it happens every time the component is updated (including mounted).
  useEffect(() => {
    console.log('Component did update');
  });

  //componentDidMount(): same as the previous, but with an dependencies array in args.
  //it happens once the component is mounted.
  useEffect(() => {
    console.log('Component did mount');
  }, []);
  /*note: in console, it will print 2x, but before each time, it will restart the states. So,
  the effect will be the same. Also, it only happens in development mode, not when it is builded.
  */

  //this """componentDidMount()""" will be called when the dependency 'counter' change also.
  useEffect(() => {
    console.log(`Counter changed to ${counter}`);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
