import styled, { css } from 'styled-components';
import { titleStyle } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacing.large};

    @media ${theme.media.mobile} {
      grid-template-columns: 1fr;
    }

    ${titleStyle} {
      margin-bottom: ${theme.spacing.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.mobile} {
      margin-bottom: ${theme.spacing.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
