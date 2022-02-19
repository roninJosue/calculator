import Button from "../Button";
import {WrappedButtons} from "../Styled/WrappedButtons";

const numbers = [
  {text: 7},
  {text: 8},
  {text: 9},
  {text: 4},
  {text: 5},
  {text: 6},
  {text: 1},
  {text: 2},
  {text: 3},
  {text: '+/-'},
  {text: 0},
  {text: '.'},
]

const Numbers = () => {
  return (
    <WrappedButtons>
      {numbers.map(number => (
        <Button
          key={number.text}
          text={number.text}
          variant='number'
          onClick={() => console.log(number.text)}
        />
      ))}
    </WrappedButtons>
  )
}

export default Numbers
