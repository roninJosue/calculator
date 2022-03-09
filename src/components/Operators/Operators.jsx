import Button from "../Button";
import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import {operatorSelector} from "../../recoil/calculator/selectors";

const operators = [
  {text: '<-', id: 'delete'},
  {text: '/', id: 'divide'},
  {text: '*', id: 'multiply'},
  {text: '-',id:'subtract'},
  {text: '+', id: 'add'},
  {text: '=', variant: 'equal', id: 'equals'},
]

const StyledOperators = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Operators = () => {
  const operatorFun = useSetRecoilState(operatorSelector)
  return (
    <StyledOperators>
      {operators.map(operator => (
        <Button
          id={operator.id}
          key={operator.id}
          text={operator.text}
          variant={operator.variant ?? 'operator'}
          onClick={() => operatorFun(operator.text)}
        />
      ))}
    </StyledOperators>
  )
}

export default Operators
