import { screen } from '@testing-library/react';

import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/themes';

test('testing something', () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });
  expect(headingContainer).toHaveStyleRule('background', 'pink');
});
