import styled from "styled-components"
import {transitionCSS} from "../../styles/utils";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${transitionCSS}
  height: 100vh;
`