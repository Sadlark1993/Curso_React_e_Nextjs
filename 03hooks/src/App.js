//Warning: NEVER use hooks inside blocks, such as while, if or for. <--------------

import P from 'prop-types';
import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';

const Post = ({ post, handleTitle }) => {
  console.log('child rendered');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleTitle(post.title)} className="Title">
        {post.title}
      </h1>
      <div>{post.body}</div>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleTitle: P.func,
};

/*each time the state changes, this function is re-called, and all the functions inside it is
re-crated/re-called. To avoid heavy functions to be re-executed or re-created, we use 'useCallback'
and useMemo(). */
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null); //the ref input initiates referencing null
  const counter = useRef(0);

  console.log('Parent rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);

  const handleTitle = (titleValue) => {
    setValue(titleValue);
    //my way
    //document.querySelector('input').scrollIntoView({ behavior: 'smooth', block: 'center' });

    //teacher's way
    input.current.focus(); //use it to reference an object. Its mutable just like a variable.
  };

  useEffect(() => {
    counter.current++; //it isn't a state. So, it does't trigger re-rendering.
  });

  return (
    <div className="App">
      <h6> Parent rendered {counter.current} times.</h6>
      <p>
        <input ref={input} value={value} onChange={(event) => setValue(event.target.value)} />
      </p>
      {/* useMemo() will save the return value and prevent 'Post' from be re-rendered 100 times after the
      press of each key on the input field.
        The difference between useMemo() and useCallback() is that useMemo() stores a value, and useCallback()
      stores a callback. */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} handleTitle={handleTitle} post={post} />;
          })
        );
      }, [posts])}
      {posts.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export default App;
