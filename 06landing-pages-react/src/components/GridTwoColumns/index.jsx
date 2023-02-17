import PropTypes from 'prop-types';

import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase darkTitle={!background}>
            {title}{' '}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
