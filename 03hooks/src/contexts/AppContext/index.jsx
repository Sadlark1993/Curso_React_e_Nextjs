import Prop from 'prop-types';
import React, { useState } from 'react';
import { stateObj } from './Data';

export const GlobalContext = React.createContext();

export const AppContext = (props) => {
  const [state, setState] = useState(stateObj);

  return <GlobalContext.Provider value={{ state, setState }}>{props.children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: Prop.element.isRequired,
};
