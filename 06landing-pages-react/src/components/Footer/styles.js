import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    a {
      color: inherit;
      font-size: ${theme.fonts.size.small};
      text-align: center;
    }
  `}
`;
