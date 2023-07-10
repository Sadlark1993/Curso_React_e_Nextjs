import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    const { debug } = renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    /* debug(); */
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self');
  });

  it('Should open the link in a new tab', () => {
    const { debug } = renderTheme(
      <MenuLink newTab={true} link="http://localhost">
        Children
      </MenuLink>,
    );
    /* debug(); */
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
  });
  it('Should open the link in a new tab', () => {
    const { debug } = renderTheme(
      <MenuLink newTab={false} link="http://localhost">
        Children
      </MenuLink>,
    );
    /* debug(); */
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
  });
});
