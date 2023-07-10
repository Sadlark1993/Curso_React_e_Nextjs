import PropTypes from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.ContainerStyle>{children}</Styled.ContainerStyle>;
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
