import './App.css';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div';

function App() {
  return (
    <div className="App">
      <AppContext>
        <Div />
      </AppContext>
    </div>
  );
}

export default App;
