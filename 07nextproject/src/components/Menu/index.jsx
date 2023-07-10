import PropTypes from 'prop-types';
import { useState } from 'react';

import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavBar } from '../NavBar';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false); //'is the menu visible?'

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <CloseIcon aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.Button>
      <Styled.MenuStyle visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuStyle2>
            <LogoLink {...logoData} />
            <NavBar links={links} />
          </Styled.MenuStyle2>
        </SectionContainer>
      </Styled.MenuStyle>
    </>
  );
};

Menu.propTypes = {
  ...NavBar.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
