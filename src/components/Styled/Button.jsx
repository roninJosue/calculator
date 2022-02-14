import styled from "styled-components";
import {transitionCSS} from "../../styles/utils";

export const StyledButton = styled.button`
  background-color: ${({theme}) => theme.operatorButtonBg};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.borderButton};
  border-radius: 5px;
  padding: .9rem 2rem;
  cursor: pointer;
  ${transitionCSS}
  
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