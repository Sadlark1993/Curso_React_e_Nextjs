import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import { screen } from '@testing-library/react';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('Should render GridTwoColumns', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
