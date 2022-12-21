import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
export const P = () => {
  const { state } = useContext(GlobalContext);

  return (
    <p>
      {state.body} Counter: {state.counter}
    </p>
  );
};
