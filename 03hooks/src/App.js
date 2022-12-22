//use reducer is used with complex states.
import './App.css';

import { H1 } from './components/H1';
import { Btn } from './components/Btn';
import { Parag } from './components/Parag';
import { AppContext } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppContext>
        <div>
          <H1 />
          <Parag />
          <Btn />
        </div>
      </AppContext>
    </div>
  );
}

export default App;
