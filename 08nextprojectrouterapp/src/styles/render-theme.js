import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './themes';

export const renderTheme = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>,
  );
};
