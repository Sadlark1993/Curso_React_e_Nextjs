import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

const random = () => `${Math.random() * 10000}`.replace(/^a-z0-9-/gi, '-');

export const SectionBackground = ({ children, background = false, sectionId = '' }) => {
  const id = sectionId ? sectionId : random();

  return (
    <Styled.bgStyle background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.bgStyle>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
};
