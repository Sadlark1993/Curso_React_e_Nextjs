import PropTypes from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const tg = newTab ? '_blank' : '_self';
  return (
    <Styled.linkStyle href={link} target={tg}>
      {children}
    </Styled.linkStyle>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};
