import Button from "../Button";
import styled from "styled-components";

const functions = [
  {text: '%'},
  {text: 'CE'},
  {text: 'C'},
  {text: '1/x'},
  {text: 'x2'},
  {text: 'sqrt'},
]

const FunctionsStyled = styled.div`
  display: flex;
  width: 230px;
  flex-wrap: wrap;
`

const Functions = () => {
  return (
    <FunctionsStyled>
      {functions.map(func => (
        <Button key={func.text} text={func.text}/>
      ))}
    </FunctionsStyled>
  )
}

export default Functions