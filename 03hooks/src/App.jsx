import { useEffect, useRef, useState } from 'react';
import './style.css';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;
    if (!isObjectEqual(urlRef.current, url)) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjectEqual(optionsRef.current, options)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) setShouldLoad((s) => !s);
  }, [url, options]);

  useEffect(() => {
    //the var wait is to the states don't change when the component is already unmounted
    let wait = false;
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) setLoading(false);
        console.warn('Error: ', e.message);
      }
    };

    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

export function App() {
  const [postId, setPostId] = useState('');
  //if I uncomment the {method: 'GET'}, the useFetch will execute several times causing error.
  //teacher solved problem using another hook again (useRef).
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, { headers: { abc: 1 } });

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!loading) {
    return (
      <div>
        <h1>Title</h1>
        {/* here, he used a ternary operator to chose if should print an array or an object. If you click
        in a title, it will load the object. If we click again, it will load the hole array again. */}
        {result?.length > 0 ? (
          result.map((post) => {
            return (
              <div key={post.id}>
                <h3 onClick={() => handleClick(post.id)}>{post.title}</h3>
              </div>
            );
          })
        ) : (
          <div key={result.id}>
            <h3 onClick={() => handleClick('')}>{result.title}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
