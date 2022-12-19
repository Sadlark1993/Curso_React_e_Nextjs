import P from 'prop-types';
import './style.css'

export const Button = ({clickEvent, disabled = false, text}) =>{
  return <button disabled = {disabled} onClick = {clickEvent} >{text}</button>
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  disabled: P.bool,
  clickEvent: P.func.isRequired,
}