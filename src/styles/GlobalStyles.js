import {createGlobalStyle} from "styled-components"
import {transitionCSS} from "./utils";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.bodyBg};
    color: ${({theme}) => theme.color};
    margin: 0;
    padding: 0 2rem;
    ${transitionCSS}
  }
`