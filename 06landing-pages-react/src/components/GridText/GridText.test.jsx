import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridText />', () => {
  it('Should render', () => {
    const { component } = renderTheme(<GridText {...mock} />);
    expect(screen.getAllByRole('heading')).toHaveLength(4);
    expect(component).toMatchSnapshot();
  });
});
