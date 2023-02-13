import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/themes';

describe('<TextComponent />', () => {
  it('Should render', () => {
    const { debug } = renderTheme(<TextComponent>Children</TextComponent>);
    /* debug(); */
    const text = screen.getByText('Children');
    expect(text).toBeInTheDocument();

    expect(text).toHaveStyle({
      fontSize: theme.fonts.size.medium,
    });
  });
});
