import React, { useState, useContext } from 'react';
import './App.css';

const stateObj = {
  title: 'Title of the Global State',
  body: 'The word "body" in portuguese means goat.',
  counter: 0,
};

//Creating the context...
const GlobalContext = React.createContext();

const Div = () => {
  return <H1 />;
};

//With context, this component does't need to receive props to access the state. It can also alter the state.
const H1 = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext); //importing the object
  //console.log(globalState);

  //careful when using setGlobalState(). It changes the state, and can trigger a infinity loop of rendering.
  return (
    <div>
      <h1 style={{ cursor: 'pointer' }} onClick={() => setGlobalState((obj) => ({ ...obj, counter: obj.counter + 1 }))}>
        {globalState.title}
      </h1>
      <p>
        {globalState.body} Counter: {globalState.counter}
      </p>
    </div>
  );
};

function App() {
  const [globalState, setGlobalState] = useState(stateObj);

  return (
    <div className="App">
      {/* The child components now can alter the state using the function setGlobalState() */}
      <GlobalContext.Provider value={{ globalState, setGlobalState }}>
        <Div />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
