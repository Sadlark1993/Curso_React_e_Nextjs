import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';
import { screen } from '@testing-library/react';

describe('<SectionContainer />', () => {
  it('Should render', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
