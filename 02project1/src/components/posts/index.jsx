import P from 'prop-types'

import './style.css'
import {PostCard} from '../postcard'

export const Posts = ({posts = []}) => (

  <div className="posts">
    {posts.map(post=>( //returning this whole parenthesis.
      <PostCard key={post.id} photo = {post.photo} title = {post.title} body = {post.body}/>  
    ))}
  </div>
)

Posts.defaultProps = {
  posts: [],
}

Posts.propTypes = {
  posts: P.array,
}