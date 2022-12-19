import P from 'prop-types'
import './style.css'

export const PostCard = ({photo, title, body}) =>{
  return (
      <div className="post">
        <img src={photo} alt={title}/>
        <div className="post-content">
          <h2 >{title}</h2>
          <p>{body}</p>
        </div>
      </div>
  );
}

PostCard.propTypes = {
  photo: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
}