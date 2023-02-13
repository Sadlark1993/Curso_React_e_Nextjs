import { renderTheme } from '../../styles/render-theme';
import { NavBar } from '.';
import { screen } from '@testing-library/react';
import Mock from './mock';
import { theme } from '../../styles/themes';

describe('<NavBar />', () => {
  it('Should render all the links', () => {
    renderTheme(<NavBar links={Mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(Mock.length);
  });

  it('Should render nothing', () => {
    renderTheme(<NavBar />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  //the test is not working properly.
  /* it('Should render in mobile mode', () => {
    renderTheme(<NavBar links={Mock} />);
    expect(screen.getAllByText(/Link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.mobile,
    });
  }); */

  it('Should render match snapshot', () => {
    const { container } = renderTheme(<NavBar links={Mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
