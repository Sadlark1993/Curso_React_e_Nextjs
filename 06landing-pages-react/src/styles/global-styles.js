import { createGlobalStyle, css } from 'styled-components';
import { theme } from './themes';

export const GlobalStyles = createGlobalStyle`

  ${'' /* reset-start */}

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  };

  ul {
    list-style: none;
  }

  ${'' /* reste-end */}


  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.family.default}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.family.secondary};
    font-weight: 900;
  }
`;
