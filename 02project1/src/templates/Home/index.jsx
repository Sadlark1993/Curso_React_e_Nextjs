import './style.css';

import { Component } from 'react';

import {loadPosts} from '../../utils/loadPosts'
import { Posts } from '../../components/posts';
import { Button } from '../../components/Button';

export class Home extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      nPosts: 3,
      disabled: false
    }
  }

  //loadPosts() returns a promisse. So, this method must be async.
  async componentDidMount(){
    const arrayPosts = await loadPosts();
    const {page, nPosts} = this.state;
    this.setState({
      posts: arrayPosts.slice(page, nPosts),
      allPosts: arrayPosts,
    });
  }


  handleNextPage = ()=>{
    let {page, nPosts, allPosts, posts} = this.state;
    console.log(page);
    page = page + nPosts;
    const nextPosts = allPosts.slice(page, page+nPosts);
    posts.push(...nextPosts);
    if(page+nPosts >= allPosts.length ) this.setState({disabled: true});
    this.setState({ page, posts}); 
    setTimeout(()=>{
      document.querySelector('button').scrollIntoView({behavior: 'smooth', block: 'start',});
    },65);
  }

  render(){
    const {posts, disabled} = this.state;
    return( //needs to return a JSX
      <section className="container">
        <Posts posts = {posts}/>
        <Button disabled = {disabled} clickEvent = {this.handleNextPage}/>
      </section>
    );
  }
}

