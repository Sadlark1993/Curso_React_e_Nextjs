import styled, { css } from 'styled-components';
import { titleStyle } from '../Heading/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacing.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
    width: 100%;
    overflow: hidden;
    padding: ${theme.spacing.small};

    @media ${theme.media.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${titleStyle} {
      position: relative;
      left: 5rem;
    }

    ${titleStyle}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -6rem;
      transform: rotate(12deg);
      font-style: italic;
      font-weight: 900;
    }
  `}
`;
