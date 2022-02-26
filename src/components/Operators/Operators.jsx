import Button from "../Button";
import styled from "styled-components";

const operators = [
  {text: '<-', id: 'delete'},
  {text: '/', id: 'divide'},
  {text: 'x', id: 'multiply'},
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
  return (
    <StyledOperators>
      {operators.map(operator => (
        <Button
          id={operator.id}
          key={operator.id}
          text={operator.text}
          variant={operator.variant ?? 'operator'}
        />
      ))}
    </StyledOperators>
  )
}

export default Operators
