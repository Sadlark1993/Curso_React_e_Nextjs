import styled, { css } from 'styled-components';

export const LogoStyle = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: inherit;

    & > img {
      max-height: 2.5rem;
    }
  `}
`;
