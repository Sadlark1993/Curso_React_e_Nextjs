import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
  const { state, setState } = useContext(GlobalContext);
  return (
    <h1 style={{ cursor: 'pointer' }} onClick={() => setState((obj) => ({ ...obj, counter: obj.counter + 1 }))}>
      {state.title}
    </h1>
  );
};
