import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({theme}) => theme.operatorButtonBg};
  color: ${({theme}) => theme.color};
  border: none;
  padding: 1rem;
  cursor: pointer;
  
  &:hover{
    background-color: ${({theme}) => theme.operatorButtonHoverBg}
  }
  
  &:active{
    background-color: ${({theme}) => theme.operatorButtonActiveBg}
  }
`
export const ThemeButton = styled(StyledButton)`
  padding: .625rem;
  text-transform: uppercase;
  border: none;
  align-self: end;
  border-radius: 50px;
`