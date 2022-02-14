import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bodyBg};
    color: ${({theme}) => theme.color};
    transition: all .3s ease-in;
    margin: 0;
    padding: 2rem;
  }
`