//H1.jsx
import { useContext } from 'react';
import { Context } from '../../context/AppContext';

export const H1 = () => {
  const context = useContext(Context);
  //console.log(context.state);
  return <h1>{context.state.title}</h1>;
};
