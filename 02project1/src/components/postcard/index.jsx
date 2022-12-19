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