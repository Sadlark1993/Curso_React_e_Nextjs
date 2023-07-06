import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacing.large};
  `}
`;
