import styled from "styled-components";
import {transitionCSS} from "../../styles/utils";

export const StyledButton = styled.button`
  background-color: ${({theme, variant = 'operator'}) => {
    if (variant === 'operator') return theme.operatorButtonBg
    return variant === 'number' ? theme.numberButtonBg : theme.equalButtonBg
  }};

  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.borderButton};
  border-radius: 5px;
  padding: .7rem 2rem;
  cursor: pointer;
  margin: .10rem;
  width: 73px;
  font-size: 1.08rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transitionCSS}
  
  &:hover {
    background-color: ${({theme, variant = 'operator'}) => {
      if (variant === 'operator') return theme.operatorButtonHoverBg
      return variant === 'number' ? theme.numberButtonHoverBg : theme.equalButtonHoverBg
    }};

  &:active {
    background-color: ${({theme}) => theme.operatorButtonActiveBg}
  }
`
export const ThemeButton = styled(StyledButton)`
  padding: .625rem;
  text-transform: uppercase;
  border: none;
  align-self: end;
  border-radius: 50px;
  width: auto;
`
