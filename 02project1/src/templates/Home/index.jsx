import './style.css';

import {useCallback, useEffect, useState } from 'react';

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

  const filteredPosts = searchValue ? allPosts.filter((item) => {
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
    },200);
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
        {!searchValue && <Button disabled = {disabled} clickEvent = {handleNextPage} text={'Load more posts'}/>}
      </section>
    );
}
