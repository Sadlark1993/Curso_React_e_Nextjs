import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('Should render background with dark theme', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('Should render background with light theme', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
