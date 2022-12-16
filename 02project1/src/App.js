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
      ],
      counter: 0,
    }

    this.timeOutUpdate = null;
  }

  //lifecycle methods: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //these methods, happens in a predetermined moment of the component's life.
  componentDidMount(){ 
    this.handleTimeOut();
  }

  componentDidUpdate(){
    this.handleTimeOut();
  }

  componentWillUnmount(){
    clearTimeout(this.timeOutUpdate);
  }


  handleTimeOut = () => {
    const {posts, counter } = this.state;
    posts[0].title = 'New Title';
    this.timeOutUpdate = setTimeout(()=>{
      this.setState({posts, counter: counter+1});
    },1000);
  }


  render(){
    const {posts, counter} = this.state;
    return( //needs to return a JSX
      <div className="App">
        <h1>{counter}</h1>
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

export default App;
