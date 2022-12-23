import { useCallback, useEffect, useState, shouldRun } from 'react';
import './style.css';

const useAsyncFunction = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(() => {
    setResult({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setResult({ result: response, error: null, status: 'settled' });
      })
      .catch((error) => {
        setResult({ result: null, error: error, status: 'error' });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [shouldRun, run]);

  return [run, result.result, result.error, result.status];
};

const getData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataObj = await data.json();
  return dataObj;
};

export function App() {
  const [refetch, result, error, status] = useAsyncFunction(getData, true);

  //disabled eslint no-unused-vars. To it does't keep yelling at me for not be using refetch.

  if (status === 'idle') {
    return <h3>Ok, nothing to do here...</h3>;
  } else if (status === 'pending') {
    return <h3>Loading...</h3>;
  } else if (status === 'settled') {
    return <pre>hallo: {JSON.stringify(result, null, 2)}</pre>;
  } else if (status === 'error') {
    return (
      <>
        <h3>This is a disaster!!!</h3> <p>{error}</p>
      </>
    );
  } else {
    return <h3> I will quit this job. Excuse-me...</h3>;
  }
}

export default App;
