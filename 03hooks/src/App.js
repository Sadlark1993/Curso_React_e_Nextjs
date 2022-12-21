//Warning: NEVER use hooks inside blocks, such as while, if or for. <--------------

import P from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('child rendered');
  return (
    <div key={post.id} className="post">
      <h1 className="Title">{post.title}</h1>
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
};

/*each time the state changes, this function is re-called, and all the functions inside it is
re-crated/re-called. To avoid heavy functions to be re-executed or re-created, we use 'useCallback'
and useMemo(). */
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Parent rendered');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((resp) => setPosts(resp));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </p>
      {/* useMemo() will save the return value and prevent 'Post' from be re-rendered 100 times after the
      press of each key on the input field.
        The difference between useMemo() and useCallback() is that useMemo() stores a value, and useCallback()
      stores a callback. */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length === 0 && <p>Loading...</p>}
    </div>
  );
}

export default App;
