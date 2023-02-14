import PropTypes from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.bgStyle background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.bgStyle>
  );
};

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
};
