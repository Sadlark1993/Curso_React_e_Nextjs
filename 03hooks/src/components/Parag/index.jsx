//Parag.jsx
import { useContext } from 'react';
import { Context } from '../../context/AppContext';

export const Parag = () => {
  const context = useContext(Context);
  return <p>{context.state.body}</p>;
};
