import './style.css'

export const Button = ({clickEvent, disabled}) =>{
  return <button disabled = {disabled} onClick = {clickEvent} >Load more posts</button>
}