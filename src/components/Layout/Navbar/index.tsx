import React from 'react'
import useLanguage from '../../../hooks/useLanguage';
import useTheme from '../../../hooks/useTheme';
import { themes } from '../../../themes';
import languages from '../../../translations';
import { StyledNav, StyledNavLeft, StyledNavRight } from './styled'

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <StyledNav theme={themes[theme]}>
      <StyledNavLeft>
        {languages[language].navBar.logo}
      </StyledNavLeft>
      <StyledNavRight>
        {languages[language].navBar.rightSide}
      </StyledNavRight>
    </StyledNav>
  );
}

export default Navbar
