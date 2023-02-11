import * as Styled from './styles';
import PropTypes from 'prop-types';

export const Heading = ({ children }) => {
  return <Styled.titleStyle>{children}</Styled.titleStyle>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
