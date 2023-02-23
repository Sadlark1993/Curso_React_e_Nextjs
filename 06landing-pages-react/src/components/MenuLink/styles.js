import styled, { css } from 'styled-components';

export const linkStyle = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fonts.size.small};
    padding: ${theme.spacing.medium};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 0%;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      margin: 1rem auto;
      transition: all 300ms ease-in-out;
      position: absolute;
      left: 50%;
    }

    &:hover::after {
      width: 50%;
      left: 25%;
    }
  `}
`;
