import Button from "../Button";
import {WrappedButtons} from "../Styled/WrappedButtons";

const numbers = [
  {text: 7, id:'seven'},
  {text: 8, id:'eight'},
  {text: 9, id:'nine'},
  {text: 4, id:'four'},
  {text: 5, id:'five'},
  {text: 6, id:'six'},
  {text: 1, id:'one'},
  {text: 2, id:'two'},
  {text: 3, id:'three'},
  {text: '+/-', id:'change_sign'},
  {text: 0, id: 'zero'},
  {text: '.', id: 'decimal'},
]

const Numbers = () => {
  return (
    <WrappedButtons>
      {numbers.map(number => (
        <Button
          id={number.id}
          key={number.id}
          text={number.text}
          variant='number'
          onClick={() => console.log(number.text)}
        />
      ))}
    </WrappedButtons>
  )
}

export default Numbers
