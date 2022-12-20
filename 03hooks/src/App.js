import './App.css';
import { useState, useEffect } from 'react';
//import { Component } from 'react'; //this is so when using class component.

const fn = () => {
  console.log('clicked on h1');
};

//using function component with hooks:
function App() {
  //const[stateVariable, variableSetter] = useState(initialValue);
  //states: every time the state changes, the component is re-tenderized on screen.
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate().
  //it happens every time the component is updated (including mounted).
  /* useEffect(() => {
    console.log('Component did update');
  }); */

  //componentDidMount(): same as the previous, but with an dependencies array in args.
  //it happens once the component is mounted.
  /* useEffect(() => {
    console.log('Component did mount');
  }, []); */
  /*note: in console, it will print 2x, but before each time, it will restart the states. So,
  the effect will be the same. Also, it only happens in development mode, not when it is builded.
  */

  //this """componentDidMount()""" will be called when the dependency 'counter' change also.
  useEffect(() => {
    //every time you use a var inside useEffect(), you need to add it to the dependencies array.
    console.log(`Counter changed to ${counter}`);

    //if you use the var this way, you don't need to add it to the dependencies array.
    setCounter2((prevCounter2) => prevCounter2 + 1);
  }, [counter]);

  //componentDidMount();
  useEffect(() => {
    setCounter2(0); //to ensure that counter 2 will start with 0.
    //the '?' is to, if the element is falsy, don't execute the function.
    document.querySelector('h1')?.addEventListener('click', fn);

    //componentWillUnmount(); -- collecting the garbage. This can be done in any useEffect().
    return () => {
      document.querySelector('h1')?.removeEventListener('click', fn);
    };
  }, []);

  return (
    <div className="App">
      <h1>
        Contador: {counter}, Contador 2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
