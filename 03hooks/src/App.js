//Warning: NEVER use hook inside blocs, such as while, if or for. <--------------

import P from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

//always remember to do the destructuring...
/*
with the 'incrementFn' being inside a useCallback(), his value will not change when the state changes,
so, the argument of Button() will not change as well. It makes memoized Button to not be rendered every
time the state change.
*/
const Button = React.memo(function Button({ incrementFn }) {
  console.log('child ron');
  return <button onClick={() => incrementFn(10)}>+</button>;
});

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

  const incrementFn = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
    console.log('incremented');
  }, []);

  console.log('Parent ron');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementFn={incrementFn} />
    </div>
  );
}

export default App;
