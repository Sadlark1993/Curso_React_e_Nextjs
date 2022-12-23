import { useEffect, useState } from 'react';
import './style.css';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        console.log('error');
        setLoading(false);
        throw e;
      }
    };

    fetchData();
  }, [url, options]);

  return [result, loading];
};

export function App() {
  //if I uncomment the {method: 'GET'}, the useFetch will execute several times causing error.
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts' /* , { method: 'GET' } */);

  if (loading) {
    console.log('loading: true');
    return <h1>Loading...</h1>;
  }
  if (!loading) {
    console.log('loading: false');
    console.log(result);
    return (
      <div>
        <h1>Title</h1>
        {result.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
