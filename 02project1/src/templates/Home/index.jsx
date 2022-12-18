import './style.css';

import { Component } from 'react';

import {loadPosts} from '../../utils/loadPosts'
import { Posts } from '../../components/posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export class Home extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      nPosts: 3,
      disabled: false,
      searchValue: '',
    }
  }

  //loadPosts() returns a promise. So, this method must be async.
  async componentDidMount(){
    const arrayPosts = await loadPosts(); //fetch the posts and images
    const {page, nPosts} = this.state;
    this.setState({
      posts: arrayPosts.slice(page, nPosts),
      allPosts: arrayPosts,
    });
  }

  //load more 3 posts in the page.
  handleNextPage = ()=>{
    let {page, nPosts, allPosts, posts} = this.state;
    page = page + nPosts;
    const nextPosts = allPosts.slice(page, page+nPosts);
    posts.push(...nextPosts);
    if(page+nPosts >= allPosts.length ) this.setState({disabled: true});
    this.setState({ page, posts}); 
    setTimeout(()=>{
      document.querySelector('button').scrollIntoView({behavior: 'smooth', block: 'start',});
    },65);
  }

  handleIChange = (event) =>{
    //console.log(event.target.value);
    this.setState({searchValue: event.target.value});
  }

  render(){
    const {posts, disabled, searchValue, allPosts} = this.state;

    const filteredPosts = !!searchValue ? allPosts.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    }) :
      posts;

    return( //needs to return a JSX
      <section className="container">

        <SearchInput searchValue={searchValue} handleIChange = {this.handleIChange}/>

        {filteredPosts.length > 0 && <Posts posts = {filteredPosts}/>}
        {filteredPosts.length === 0 && <p>No post matching the search. =(</p>}

        {/* 'clickEvent' is not an event. Its an atribute that is sent to the react element Button. */}
        {/* Manipulating the state based on the input value of search. The second side of the logic
        operator will execute only if the first one is truthy */}
        {!searchValue && <Button disabled = {disabled} clickEvent = {this.handleNextPage}/>}
      </section>
    );
  }
}

