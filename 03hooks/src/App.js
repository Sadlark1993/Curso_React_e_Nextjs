import React, { useContext } from 'react';
import './App.css';

const stateObj = {
  title: 'Title of the Global State',
  body: 'The word "body" in portuguese means goat.',
};

/*to avoid to have to being passing props between several components to just serve the last one,
we use Context.*/
const GlobalContext = React.createContext();

const Div = () => {
  return <H1 />;
};

const H1 = () => {
  const theContext = useContext(GlobalContext); //importing the object
  return (
    <div>
      <h1>{theContext.title}</h1>
      <p>{theContext.body}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* every child of this component can access this obj now */}
      <GlobalContext.Provider value={stateObj}>
        <Div />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
