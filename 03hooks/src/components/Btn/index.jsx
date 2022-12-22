//Btn.jsx
import { useRef, useContext } from 'react';
import { Context } from '../../context/AppContext';

export const Btn = () => {
  const input = useRef(null); //initiates this referencing null.
  const context = useContext(Context);
  return (
    <>
      <button onClick={() => context.changeTitle(input.current.value)}>Change Title</button>
      <p>
        <input ref={input} />
      </p>
    </>
  );
};
