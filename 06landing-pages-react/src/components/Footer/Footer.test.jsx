import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('Should render Footer', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
