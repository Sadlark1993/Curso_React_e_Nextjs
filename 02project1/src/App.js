import './App.css';
import { Component } from 'react';


class App extends Component{
  //if you use class fields, you will not need to use constructor. Its just put the vars in the class.
  constructor(props){
    super(props);
    this.state = {
      posts: [],
    }
  }

  //this, makes the Component renders the posts into the screen.
  /* componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/posts') //returns a response json(array-of-objects)
    .then(response => response.json()) //returns an js object
    .then(respObj => this.setState({posts: respObj})); //this.state.posts = respObj
  } */

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

    //console.log(arrayPosts);

    this.setState({posts: arrayPosts});

  }

  render(){
    const {posts} = this.state;
    return( //needs to return a JSX
      <div className="App">

        <section className="container">
          <div className="posts">
            {posts.map(post=>( //returning this whole parenthesis.

              <div key={post.id} className="post">
                <img src={post.photo} alt={post.title}/>
                <div className="post-content">
                  <h1 >{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
              
            ))}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
