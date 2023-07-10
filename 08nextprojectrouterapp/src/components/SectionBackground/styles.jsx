import styled, { css } from 'styled-components';

const activateBg = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const bgStyle = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${background && activateBg(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
