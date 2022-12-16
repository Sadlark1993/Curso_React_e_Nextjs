import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      name: 'Cláudio',
      lastName: 'Zimmermann',
      counter: 1,
    }

    //bind
    this.handlePClick = this.handlePClick.bind(this);
  }

  handlePClick(){
    //every time the state changes, the render() method is called again.
    this.setState({name: 'Junior'});
  }

  //arrow functions does't have 'this', so it searches for it's parent's this. So, does't need to do the bind.
  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter+1});

  }

  render(){
    const {name, counter} = this.state;
    return( //needs to return a JSX
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick = {this.handlePClick}> {/* added a event listener onClick */}
            Hello {name} {counter}!! {/* using var */}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React
          </a>
        </header>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
