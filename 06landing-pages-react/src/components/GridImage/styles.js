import styled, { css } from 'styled-components';
import { titleStyle } from '../Heading/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & > ${TextContainer} {
      margin-bottom: ${theme.spacing.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(12deg);
    }
  `}
`;
