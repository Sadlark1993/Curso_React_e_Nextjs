import styled, { css } from 'styled-components';

const mediaFont = (theme) => css`
  @media ${theme.media.mobile} {
    font-size: ${theme.fonts.size.xlarge};
  }
`;

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.size.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.size.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.size.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.size.xhuge};
    ${mediaFont(theme)};
  `,
};

export const titleStyle = styled.h1`
  ${({ theme, darktitle, size, uppercase }) => css`
    color: ${darktitle ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `}
`;
