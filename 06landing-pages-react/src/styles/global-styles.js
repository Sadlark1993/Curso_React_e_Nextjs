import { createGlobalStyle, css } from 'styled-components';
import { theme } from './themes';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital@0;1&display=swap');

  ${'' /* reset-start */}

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
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

  h1 {
    font-family: ${theme.fonts.family.secondary}
  }
`;
