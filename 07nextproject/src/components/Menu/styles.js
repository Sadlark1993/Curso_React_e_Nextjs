import styled, { css } from 'styled-components';
import { ContainerStyle } from '../SectionContainer/styles';
import { titleStyle } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const MenuStyle = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

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
      /* same as display:none, except for the fact that with this, we can use transition. */
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)};

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
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    /* if menu is visible, this block don't captures the pointer actions. */
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.mobile} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
