//Compound Pattern
//to insert a JSX element as a child of a compound component:

import { Children, cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

const s = {
  style: {
    margin: '10px',
    fontSize: '1.5em',
    display: 'block',
  },
};

const TurnOnOff = ({ children }) => {
  const [itsOn, setItsOn] = useState(false);
  const onToggle = () => setItsOn((i) => !i);
  return Children.map(children, (child) => {
    if (typeof child.type === 'string') return child; //that*
    const newChild = cloneElement(child, { s, itsOn, onToggle });
    return newChild;
  });
};

const TurnedOn = ({ itsOn, children, s }) => (itsOn ? <p {...s}> {children} </p> : null);
TurnedOn.propTypes = {
  itsOn: PropTypes.bool,
  children: PropTypes.node,
  s: PropTypes.object,
};

const TurnedOff = ({ itsOn, children, s }) => (itsOn ? null : <p {...s}>{children}</p>);
TurnedOff.propTypes = {
  itsOn: PropTypes.bool,
  children: PropTypes.node,
  s: PropTypes.object,
};

const ToggleButton = ({ itsOn, onToggle }) => (
  <button {...s} onClick={onToggle}>
    Toggle: {itsOn ? 'ON' : 'OFF'}
  </button>
);
ToggleButton.propTypes = {
  itsOn: PropTypes.bool,
  children: PropTypes.node,
  onToggle: PropTypes.func,
};

export const App = () => {
  return (
    //to insert a JSX element here, you'll need to do that*
    <TurnOnOff>
      <TurnedOn>This thing shows that it&apos;s turned on</TurnedOn>
      <TurnedOff>Oh! It&apos;s so dark down here!</TurnedOff>
      <p style={{ margin: '10px' }}>I&apos;m just a P, never mind.</p>
      <ToggleButton />
    </TurnOnOff>
  );
};
