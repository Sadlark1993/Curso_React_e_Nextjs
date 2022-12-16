import './App.css';
import { Component } from 'react';


class App extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Title 1',
          body: 'body 1'
        },
        {
          id: 2,
          title: 'Title 2',
          body: 'body 2'
        },
        {
          id: 3,
          title: 'Title 3',
          body: 'body 3'
        },
      ]
    }
  }


  render(){
    const {posts} = this.state;
    return( //needs to return a JSX
      <div className="App">
        {posts.map(post=>( //returning this whole parenthesis.
          //always put a key in the first element of the .map().
          <div key={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
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
