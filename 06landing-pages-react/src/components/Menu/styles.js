import styled, { css } from 'styled-components';
import { ContainerStyle } from '../SectionContainer/styles';
import { titleStyle } from '../Heading/styles';

export const MenuStyle = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    /* Changing css properties of the ContainerStyle when it's child of MenuStyle */
    > ${ContainerStyle} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${titleStyle} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.mobile} {
      height: 100vh;

      /* Changing css properties of the ContainerStyle when it's child of MenuStyle */
      > ${ContainerStyle} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${titleStyle} {
        padding-bottom: ${theme.spacing.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuStyle2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.mobile} {
      display: block;
      text-align: center;
      padding: ${theme.spacing.medium};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css``}
`;
