import { createGlobalStyle } from 'styled-components'
import DdinRegular from '../fonts/ddin.otf'
import DdinMedium from '../fonts/ddin500.otf'
import DdinSemiBold from '../fonts/ddin600.otf'
import DdinBold from '../fonts/ddin700.otf'
import DdinStrong from '../fonts/ddin800.otf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'D-DIN';
    src: url(${DdinRegular}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'D-DIN';
    src: url(${DdinMedium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'D-DIN';
    src: url(${DdinSemiBold}) format('opentype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'D-DIN';
    src: url(${DdinBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
    }
    @font-face {
    font-family: 'D-DIN';
    src: url(${DdinStrong}) format('opentype');
    font-weight: 800;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'D-DIN';
  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
