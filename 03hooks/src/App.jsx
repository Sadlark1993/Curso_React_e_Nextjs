//Compound Pattern using useContext.

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const s = {
  style: {
    margin: '10px',
    fontSize: '1.5em',
    display: 'block',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [itsOn, setItsOn] = useState(false);
  const onToggle = () => setItsOn((i) => !i);

  return <TurnOnOffContext.Provider value={{ itsOn, onToggle }}>{children}</TurnOnOffContext.Provider>;
};
TurnOnOff.propTypes = {
  children: PropTypes.node,
};

const TurnedOn = ({ children }) => {
  const { itsOn } = useContext(TurnOnOffContext);
  return itsOn ? <p {...s}> {children} </p> : null;
};
TurnedOn.propTypes = {
  children: PropTypes.node,
};

const TurnedOff = ({ children }) => {
  const { itsOn } = useContext(TurnOnOffContext);
  return itsOn ? null : <p {...s}>{children}</p>;
};
TurnedOff.propTypes = {
  children: PropTypes.node,
};

const ToggleButton = () => {
  const { itsOn, onToggle } = useContext(TurnOnOffContext);

  return (
    <button {...s} onClick={onToggle}>
      Toggle: {itsOn ? 'ON' : 'OFF'}
    </button>
  );
};
ToggleButton.propTypes = {
  itsOn: PropTypes.bool,
  children: PropTypes.node,
  onToggle: PropTypes.func,
};

export const App = () => {
  return (
    //to insert a JSX element here, you'll need to do that*
    <TurnOnOff>
      <div>
        <TurnedOn>This thing shows that it&apos;s turned on</TurnedOn>
        <TurnedOff>Oh! It&apos;s so dark down here!</TurnedOff>
        <p style={{ margin: '10px' }}>I&apos;m just a P, never mind.</p>
        <ToggleButton />
      </div>
    </TurnOnOff>
  );
};
