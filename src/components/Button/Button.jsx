import {StyledButton} from "../Styled/Button";

const Button = ({text, onClick, variant}) => {

  return(
    <StyledButton
      onClick={onClick}
      variant={variant}
    >
      {text}
    </StyledButton>
  )
}

export default Button