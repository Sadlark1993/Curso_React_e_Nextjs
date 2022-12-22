import './style.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';

export function App() {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
}

export default App;
