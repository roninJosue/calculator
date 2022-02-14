import styled from "styled-components"
import {transitionCSS} from "../../styles/utils";

export const Section = styled.section`
  min-width: 320px;
  min-height: 500px;
  background-color: ${({theme}) => theme.calculatorBg};
  border: 1px solid ${({theme}) => theme.borderColor};
  border-radius: 10px;
  padding: .325rem;
  ${transitionCSS}
`