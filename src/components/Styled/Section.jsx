import styled from "styled-components"
import {transitionCSS} from "../../styles/utils";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-width: auto;
  min-height: 500px;
  background-color: ${({theme}) => theme.calculatorBg};
  border: 1px solid ${({theme}) => theme.borderColor};
  border-radius: 10px;
  padding: .18rem;
  ${transitionCSS}
`
