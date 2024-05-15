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
      box-shadow: 0 0 0 2px ${s.theme.colors.blue};
    }

    body {
      background: ${s.theme.colors['base-background']};
      color: ${s.theme.colors.white};
      -webkit-font-smoothing: antialized;
    }
    
    body, input, textarea, button {
      font: ${s.theme.fonts['text-m']};
      color: ${s.theme.colors['base-text']};
    }

  `}
`