import styled from "styled-components";
import {StyledButton} from "../Styled/Button";

const Button = ({text, onClick}) => {

  return(
    <StyledButton
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button