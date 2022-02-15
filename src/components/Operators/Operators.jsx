import Button from "../Button";
import styled from "styled-components";

const operators = [
  {text: '<-'},
  {text: '/'},
  {text: 'x'},
  {text: '_'},
  {text: '+'},
  {text: '=', variant: 'equal'},
]

const StyledOperators = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Operators = () => {
  return (
    <StyledOperators>
      {operators.map(operator => (
        <Button
          key={operator.text}
          text={operator.text}
          variant={operator.variant ?? 'operator'}
        />
      ))}
    </StyledOperators>
  )
}

export default Operators