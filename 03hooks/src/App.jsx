import { useEffect, useLayoutEffect } from 'react';
import { useState, useRef } from 'react';

export const App = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  };

  //with useLayoutEffect, the DOM will be rendered only after all the changes. So, in this case, the page will freeze before be rendered
  //with useEffect, the page would freeze for 2 seconds while its rendering.
  //Only use this when you don't have any choice left.
  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 2000)
      //freezes the page for 2s
      divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)} </button>
      <div ref={divRef} style={{ height: '200px', width: '200px', overflow: 'scroll' }}>
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
};
