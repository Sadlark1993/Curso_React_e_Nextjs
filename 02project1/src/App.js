import './App.css';
import { Component } from 'react';
import { PostCard } from './components/postcard';


class App extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    //returns a response json(array-of-objects)
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts'); 
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsObj = await posts.json();
    const photosObj = await photos.json();


    const arrayPosts = postsObj.map((post, index)=>{
      return {...post, photo: photosObj[index].url};
    });

    this.setState({posts: arrayPosts});

  }

  render(){
    const {posts} = this.state;
    return( //needs to return a JSX
      <div className="App">

        <section className="container">
          <div className="posts">
            {posts.map(post=>( //returning this whole parenthesis.

              <PostCard key={post.id} photo = {post.photo} title = {post.title} body = {post.body}/>
              
            ))}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
