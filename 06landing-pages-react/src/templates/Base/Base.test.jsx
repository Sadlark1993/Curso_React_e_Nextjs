import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { screen } from '@testing-library/react';

describe('<Base />', () => {
  it('Should render', () => {
    renderTheme(<Base>Children</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
