import Button from "../Button";
import {WrappedButtons} from "../Styled/WrappedButtons";

const functions = [
  {text: '%'},
  {text: 'CE'},
  {text: 'C'},
  {text: '1/x'},
  {text: 'x2'},
  {text: 'sqrt'},
]

const Functions = () => {
  return (
    <WrappedButtons>
      {functions.map(func => (
        <Button key={func.text} text={func.text}/>
      ))}
    </WrappedButtons>
  )
}

export default Functions