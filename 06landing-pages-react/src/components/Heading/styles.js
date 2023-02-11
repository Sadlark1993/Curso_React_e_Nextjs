import styled, { css } from 'styled-components';
import { theme } from '../../styles/themes';

export const titleStyle = styled.h1`
  ${({ theme, lightT }) => css`
    color: ${lightT ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
