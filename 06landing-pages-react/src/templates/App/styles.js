import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${props.theme.colors.secondaryBg};
  `}
  color: ${({ theme }) => theme.colors.boom};
  font-size: 18px;
  &:hover {
    color: black;
  }
  &::after {
    content: '----';
  }
`;
