import { useEffect } from 'react';
import { useCounterContext } from './contexts/CounterContext';

export const App = () => {
  const [state, actions] = useCounterContext();
  console.log(state);

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return <h1 onClick={actions.increase}>oi</h1>;
};
