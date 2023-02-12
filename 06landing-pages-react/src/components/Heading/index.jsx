import * as Styled from './styles';
import PropTypes from 'prop-types';

export const Heading = ({ children, darkTitle = true, as = 'h1', size = 'big', uppercase = false }) => {
  return (
    <Styled.titleStyle darkTitle={darkTitle} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.titleStyle>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  darkTitle: PropTypes.bool.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};
