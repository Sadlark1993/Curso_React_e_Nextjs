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
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.family.default}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.family.secondary};
    font-weight: 900;
  }

  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  ul, ol{
    margin: ${({ theme }) => theme.spacing.medium} 0;
    padding: ${({ theme }) => theme.spacing.medium} 0;
  }

  a{
    color: ${({ theme }) => theme.colors.sakuraz};
  }
`;
