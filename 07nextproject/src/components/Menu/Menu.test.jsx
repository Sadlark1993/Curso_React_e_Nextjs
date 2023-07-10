import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { fireEvent, screen } from '@testing-library/react';
import linksMock from '../NavBar/mock';
import { theme } from '../../styles/themes';

const logoData = {
  text: 'Logo',
  link: '#',
};

describe('<Menu />', () => {
  it('Should render Logo and nav bar', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should render button only when it should', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.mobile,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.mobile,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.mobile,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.mobile,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('Should not render the links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);

    expect(screen.queryByRole('navigation', { name: 'Main menu' }).firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
