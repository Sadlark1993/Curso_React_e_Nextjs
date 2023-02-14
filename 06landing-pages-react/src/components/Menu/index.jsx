import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavBar } from '../NavBar';

export const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.MenuStyle>
      <SectionContainer>
        <Styled.MenuStyle2>
          <LogoLink {...logoData} />
          <NavBar links={links} />
        </Styled.MenuStyle2>
      </SectionContainer>
    </Styled.MenuStyle>
  );
};

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
