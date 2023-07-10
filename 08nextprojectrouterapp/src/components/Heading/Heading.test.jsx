import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

describe('<Heading/>', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(<Heading>texto</Heading>);
    /* debug(); */

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      fontSize: theme.fonts.size.xhuge,
      textTransform: 'none',
    });
  });

  it('Should render with given text size vales', () => {
    //with small fonts
    const { rerender } = renderTheme(
      <Heading size={'small'} darkTitle={false}>
        fontSmall darkFalse
      </Heading>,
    );
    /* debug(); */

    let heading = screen.getByRole('heading', { name: 'fontSmall darkFalse' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontSize: theme.fonts.size.medium,
    });

    //with huge fonts
    rerender(
      <ThemeProvider theme={theme}>
        <Heading darkTitle={false} size={'huge'}>
          text
        </Heading>
      </ThemeProvider>,
    );
    heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontSize: theme.fonts.size.xhuge,
    });

    //with big fonts
    rerender(
      <ThemeProvider theme={theme}>
        <Heading darkTitle={false} size={'big'}>
          text
        </Heading>
      </ThemeProvider>,
    );
    heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontSize: theme.fonts.size.xlarge,
    });

    //with medium fonts
    rerender(
      <ThemeProvider theme={theme}>
        <Heading darkTitle={false} size={'medium'}>
          text
        </Heading>
      </ThemeProvider>,
    );
    heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
      fontSize: theme.fonts.size.large,
    });
  });

  it('Should render the correct font size when mobile', () => {
    renderTheme(
      <Heading size={'huge'} darkTitle={false}>
        text
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyleRule('font-size', theme.fonts.size.xlarge, { media: theme.media.mobile });
  });

  it('Should render with uppercase letters', () => {
    renderTheme(
      <Heading size={'huge'} darkTitle={false} uppercase={true}>
        text
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      textTransform: 'uppercase',
    });
  });

  it('Should render with the correct tag', () => {
    const { container } = renderTheme(<Heading as="h5">text</Heading>);
    const h5 = container.querySelector('h5');

    expect(h5.tagName.toLowerCase()).toBe('h5');
  });
});
