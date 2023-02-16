import PropTypes from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavBar = ({ links = [] }) => {
  return (
    <Styled.NavBarStyle aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.NavBarStyle>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};
