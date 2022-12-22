import './App.css';
import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  console.log('my hook');
  const savedCb = useRef();
  //when the callback changes, this will store it in the 'variable'.
  useEffect(() => {
    console.log('change fu');
    savedCb.current = cb;
  }, [cb]);

  //when the delay changes, this updates the interval.
  useEffect(() => {
    console.log('change delay');
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    /*it will only clean up the interval and set another, if the delay changes. You can re-render
     the component as you wish, that the interval will be the same.*/
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [state, setState] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [update, setUpdate] = useState(100);

  useMyHook(() => setState((c) => c + 1), delay);

  return (
    <div className="App">
      <h1> Counter: {state}.</h1>
      <p>delay: {delay}</p>
      <button
        onClick={() => {
          setDelay(+delay + update);
        }}
      >
        + {update}
      </button>
      <button
        onClick={() => {
          setDelay(+delay - update);
        }}
      >
        - {update}
      </button>
      <input
        value={update}
        onChange={(event) => {
          setUpdate(+event.target.value);
        }}
      />
    </div>
  );
}

export default App;
