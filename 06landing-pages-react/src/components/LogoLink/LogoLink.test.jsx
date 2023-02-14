import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#" text="hallo world" />);
    expect(screen.getByRole('heading', { name: 'hallo world' }).firstChild).toHaveAttribute('href', '#');
  });

  it('Should render img logo', () => {
    renderTheme(<LogoLink link="#" text="hallo world" srcImg="image.jpg" />);
    expect(screen.getByRole('heading', { name: 'hallo world' }).firstChild.firstChild).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#" text="hallo world" srcImg="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
