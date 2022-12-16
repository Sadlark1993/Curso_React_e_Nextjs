import './App.css';

import { Component } from 'react';

import {loadPosts} from './utils/loadPosts'
import { Posts } from './components/posts';

class App extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  //loadPosts() returns a promisse. So, this method must be async.
  async componentDidMount(){
    const arrayPosts = await loadPosts();
    this.setState({posts: arrayPosts});
  }

  render(){
    const {posts} = this.state;
    return( //needs to return a JSX
      <section className="container">
        <Posts posts = {posts}/>
      </section>
    );
  }
}

export default App;
