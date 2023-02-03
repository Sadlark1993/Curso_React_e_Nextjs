import { forwardRef, useImperativeHandle, useLayoutEffect } from 'react';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const App = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  //with useLayoutEffect, the DOM will be rendered only after all the changes. So, in this case, the page will freeze before be rendered
  //with useEffect, the page would freeze for 300 milliseconds while its rendering.
  //Only use this when you don't have any choice left.
  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300)
      //freezes the page for 2s
      divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)} </button>
      <DisplayContent counted={counted} ref={divRef} />
    </>
  );
};

//with this, you can save the reference of an element from another react component.
export const DisplayContent = forwardRef(function DisplayContent({ counted }, ref) {
  return (
    <div ref={ref} style={{ height: '200px', width: '200px', overflow: 'scroll' }}>
      {counted.map((c) => {
        return <p key={`c-${c}`}>{c}</p>;
      })}
    </div>
  );
});

DisplayContent.propTypes = {
  counted: PropTypes.array,
};
