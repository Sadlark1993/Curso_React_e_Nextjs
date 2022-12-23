import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { increment } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const { postsState, postsDispatch } = useContext(PostsContext);
  const isMounted = useRef(true);

  const { counterState, counterDispatch } = useContext(CounterContext);

  //with <react.strictMode> in index.js, this app only works with the next line on.
  //isMounted.current = true;

  //postsDispatch don't change, it's always the same function. So, the useEffect() will execute only once.
  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1 onClick={() => increment(counterDispatch)}>Posts List: {counterState.counter}</h1>
      {postsState.loading && <strong>Loading...</strong>}
      {postsState.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
