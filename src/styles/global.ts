import { createGlobalStyle } from 'styled-components'

import { mixins } from './mixins'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  } 

  body, input, textarea, button {
    ${mixins.fonts.textM}
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
