import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import { Component } from 'react'; //this is so when using class component.

//using function component with hooks:
function App() {
  //const[stateVariable, variableSetter] = useState(initialValue);
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);

    //you can use a callback inside the setState to guarantee that the value update will occur correctly
    //setCounter((prevCounter)=>prevCounter+1); //this also works.
    //setReverse((prevReverse)=>!prevReverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}.</h1>
        <img src={logo} className={`App-logo ${reverseClass} `} alt="logo" />
        <p>
          {`Reverse:
            ${reverse ? 'ON.' : 'OFF'}`}
        </p>
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </header>
    </div>
  );
}

//using class component:
/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverse: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  }

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass} `} alt="logo" />
          <p>
            {`Reverse:
            ${reverse ? 'ON.' : 'OFF'}`}
          </p>
          <button type="button" onClick={this.handleClick}>
            Reverse
          </button>
        </header>
      </div>
    );
  }
} */
export default App;
