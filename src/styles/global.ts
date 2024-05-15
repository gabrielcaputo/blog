import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${s => css`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${s.theme.blue};
    }

    body {
      background: ${s.theme['base-background']};
      color: ${s.theme.white};
      -webkit-font-smoothing: antialized;
    }
    
    body, input, textarea, button {
      font: 400 1rem 'Nunito', sans-serif;
    }

  `}
`