import { renderTheme } from '../../styles/render-theme';
import { Dummy } from '.';
import { screen } from '@testing-library/react';

describe('<Dummy />', () => {
  it('Should render', () => {
    const { debug } = renderTheme(<Dummy>Children</Dummy>);
    debug();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
