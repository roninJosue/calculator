import {StyledButton} from "../Styled/Button";

const Button = ({text, onClick, variant, ...props}) => {

  return(
    <StyledButton
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {text}
    </StyledButton>
  )
}

export default Button
