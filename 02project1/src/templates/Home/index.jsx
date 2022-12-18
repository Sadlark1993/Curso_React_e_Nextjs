import './style.css';

import { Component, useCallback, useEffect, useState } from 'react';

import {loadPosts} from '../../utils/loadPosts'
import { Posts } from '../../components/posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export const Home = () =>{

  //remember: [a, b] = [1, 2, 3, 4, 5]; a <-- 1, b <-- 2 .

  /* hooks.
  const [statName, function_setter] = useState([initialValue]);
  */
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [nPosts] = useState(3);
  const [disabled, setDisabled] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = !!searchValue ? allPosts.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  }) 
  :
  posts;



  const loadFirstPosts = useCallback( async (page, nPosts) => {
    const arrayPosts = await loadPosts(); //fetch the posts and images
    setPosts(arrayPosts.slice(page, nPosts));
    setAllPosts(arrayPosts);
  }, [])

     //useEffect will play the role of componentDidMount(), componentDidUpdate() and componentWillUnmount().
  /*
  useEffect(callBackFunction(), arrayOfDependencies[]);
  //the arrayOfDependencies will receive variables that will be used in the callBackFunction.
  //if a variable of this array change, the function will be re-called.
  */
  useEffect(()=>{ //its executing 2 times when the page es reload.
    console.log('foi');
    loadFirstPosts(0, nPosts);
  },[loadFirstPosts, nPosts]);

  //load more 3 posts in the page.
  const handleNextPage = ()=>{
    
    const newPage = page + nPosts;
    const nextPosts = allPosts.slice(newPage, newPage+nPosts);
    posts.push(...nextPosts);
    if(page+nPosts >= allPosts.length ) setDisabled(true);
    //this.setState({ page, posts}); 
    setPage(newPage);
    setPosts(posts);
    setTimeout(()=>{
      document.querySelector('button').scrollIntoView({behavior: 'smooth', block: 'start',});
    },65);
  }

  const handleIChange = (event) =>{
    setSearchValue(event.target.value)
  }

  return( //needs to return a JSX
      <section className="container">

        <SearchInput searchValue={searchValue} handleIChange = {handleIChange}/>

        {filteredPosts.length > 0 && <Posts posts = {filteredPosts}/>}
        {filteredPosts.length === 0 && <p>No post matching the search. =(</p>}

        {/* 'clickEvent' is not an event. Its an atribute that is sent to the react element Button. */}
        {/* Manipulating the state based on the input value of search. The second side of the logic
        operator will execute only if the first one is truthy */}
        {!searchValue && <Button disabled = {disabled} clickEvent = {handleNextPage}/>}
      </section>
    );
}

/* export class Home2 extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      nPosts: 3, //number of posts per load.
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

       */
        //{/* 'clickEvent' is not an event. Its an atribute that is sent to the react element Button. */}
        //{/* Manipulating the state based on the input value of search. The second side of the logic
        //operator will execute only if the first one is truthy */}
        /*{!searchValue && <Button disabled = {disabled} clickEvent = {this.handleNextPage}/>}
      </section>
    );
  }
}
 */
