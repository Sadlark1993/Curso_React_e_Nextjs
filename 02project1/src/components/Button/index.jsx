import './style.css'

export const Button = ({clickEvent, disabled, text}) =>{
  return <button disabled = {disabled} onClick = {clickEvent} >{text}</button>
}