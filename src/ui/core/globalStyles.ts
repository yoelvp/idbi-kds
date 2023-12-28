import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
`
