import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  };

  ul {
    list-style: none;
  }

  body {
    ${(props) => css`
      background: ${props.theme.colors.primaryBg};
    `}
  }
`;
