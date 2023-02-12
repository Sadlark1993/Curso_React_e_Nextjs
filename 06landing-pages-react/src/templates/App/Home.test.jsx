import { screen } from '@testing-library/react';

import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/themes';

describe('<Home/>', () => {
  it('should render Home', () => {
    renderTheme(<Home />);
  });
});
