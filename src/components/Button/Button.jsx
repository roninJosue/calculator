import styled from "styled-components";

const Button = ({char}) => {

  const StyledButton = styled.button`
    background-color: #61dafb;
    color: #282c34;
    border: none;
  `

  return(
    <StyledButton>
      {char}
    </StyledButton>
  )
}

export default Button