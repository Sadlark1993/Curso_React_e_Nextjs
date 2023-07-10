import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridImage />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
