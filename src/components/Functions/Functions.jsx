import Button from "../Button";
import {WrappedButtons} from "../Styled/WrappedButtons";

const functions = [
  {text: '%', id: 'percentage'},
  {text: 'CE', id: 'clear_all'},
  {text: 'C', id: 'clear'},
  {text: '1/x',id: 'divide_by'},
  {text: 'x2', id: 'power'},
  {text: 'sqrt', id: 'square'},
]

const Functions = () => {
  return (
    <WrappedButtons>
      {functions.map(func => (
        <Button id={func.id} key={func.id} text={func.text}/>
      ))}
    </WrappedButtons>
  )
}

export default Functions