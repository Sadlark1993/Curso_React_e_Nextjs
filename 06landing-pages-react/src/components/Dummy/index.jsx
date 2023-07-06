import PropTypes from 'prop-types';

export const Dummy = ({ children }) => {
  return <h1>{children}</h1>;
};

Dummy.propTypes = {
  children: PropTypes.node.isRequired,
};
