import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { screen } from '@testing-library/react';
import { mockBase } from './stories';
import React from 'react';

describe('<Base />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
