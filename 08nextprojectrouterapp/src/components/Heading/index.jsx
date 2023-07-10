import * as Styled from './styles';
import PropTypes from 'prop-types';

export const Heading = ({ children, darktitle = true, as = 'h1', size = 'huge', uppercase = true }) => {
  return (
    <Styled.titleStyle darktitle={darktitle} as={as} size={size} uppercase={uppercase || false}>
      {children}
    </Styled.titleStyle>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  darktitle: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};
