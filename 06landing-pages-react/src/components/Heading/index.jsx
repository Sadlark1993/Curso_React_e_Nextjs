import * as Styled from './styles';
import PropTypes from 'prop-types';

export const Heading = ({ children, lightT = false }) => {
  return <Styled.titleStyle lightT={lightT}>{children}</Styled.titleStyle>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  lightT: PropTypes.bool.isRequired,
};
