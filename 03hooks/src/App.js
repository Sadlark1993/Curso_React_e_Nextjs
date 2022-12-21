//Warning: NEVER use hook inside blocs, such as while, if or for. <--------------

import P from 'prop-types';
import './App.css';
import React, { useCallback, useState, useMemo } from 'react';

//always remember to do the destructuring...
const Button = ({ incrementFn }) => {
  console.log('child ran');
  return <button onClick={() => incrementFn(10)}>+</button>;
};

Button.propTypes = {
  incrementFn: P.func,
};

/*each time the state changes, this function is re-called, and all the functions inside it is
re-crated/re-called. To avoid heavy functions to be re-executed or re-created, we use 'useCallback'
and useMemo(). */
function App() {
  //const[stateVariable, variableSetter] = useState(initialValue);
  //states: every time the state changes, the component is re-tenderized on screen.
  const [counter, setCounter] = useState(0);

  /*
  with the 'incrementFn' being inside a useCallback(), his value will not change when the state changes,
  so, the argument of Button() will not change as well. It makes memoized Button to not be rendered every
  time the state change.
  */
  const incrementFn = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
    console.log('incremented');
  }, []);

  console.log('Parent ran');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      {/* useMemo() is the same thing as useCallback(), but it returns a value instead a function.
        If the content of the dependencies array don't change, what is inside useMemo() will not
        re-render. */}
      {useMemo(
        () => (
          <Button incrementFn={incrementFn} />
        ),
        [incrementFn],
      )}
    </div>
  );
}

export default App;
