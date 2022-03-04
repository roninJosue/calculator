import Button from "../Button";
import {WrappedButtons} from "../Styled/WrappedButtons";
import {useSetRecoilState} from "recoil";
import {functionSelector} from "../../recoil/calculator/selectors";

const functions = [
  {text: '%', id: 'percentage'},
  {text: 'CE', id: 'clear_all'},
  {text: 'C', id: 'clear'},
  {text: '1/x',id: 'divide_by'},
  {text: 'x2', id: 'power'},
  {text: 'sqrt', id: 'square'},
]

const Functions = () => {
  const func = useSetRecoilState(functionSelector)
  return (
    <WrappedButtons>
      {functions.map(f => (
        <Button
          key={f.id}
          id={f.id}
          text={f.text}
          onClick={() => func(f.text)}
        />
      ))}
    </WrappedButtons>
  )
}

export default Functions