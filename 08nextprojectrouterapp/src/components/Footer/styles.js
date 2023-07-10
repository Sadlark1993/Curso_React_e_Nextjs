import styled, { css } from 'styled-components';
import { Container as TextContainer } from '../TextComponent/styles';
import { ContainerStyle } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    border-top: solid 0.2rem ${theme.colors.mediumGray};
    text-align: center;
    a {
      color: inherit;
      text-align: center;
    }

    & ${TextContainer} {
      font-size: ${theme.fonts.size.small};
    }

    & ${ContainerStyle} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
