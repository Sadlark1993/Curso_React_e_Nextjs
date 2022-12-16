export const PostCard = ({photo, title, body}) =>{
  return (
      <div className="post">
        <img src={photo} alt={title}/>
        <div className="post-content">
          <h1 >{title}</h1>
          <p>{body}</p>
        </div>
      </div>
  );
}