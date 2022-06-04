import React from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useSidebar from '../../../hooks/useSidebar'
import useTheme from '../../../hooks/useTheme'
import Hamburguer from '../../../icons/Hamburguer'
import Logo from '../../../icons/Logo/Logo'
import { themes } from '../../../themes'
import languages from '../../../translations'
import LaguageButton from '../../LaguageButton'
import RoundButton from '../../RoundButton'
import { StyledNav, StyledNavLeft, StyledNavRight } from './styled'

const Navbar: React.FC = () => {
  const { theme } = useTheme()
  const { changeSidebar } = useSidebar();
  const { language } = useLanguage()

  return (
    <StyledNav theme={themes[theme]}>
      <StyledNavLeft>
        <RoundButton onClick={changeSidebar} bgcolor="primary" color="alternative" noPadding={true}>
          <Hamburguer />
        </RoundButton>
        <Logo padding="0 0 0 1em" />
      </StyledNavLeft>
      <StyledNavRight>
        <RoundButton bgcolor="alternative" color="primary">
          {languages[language].navBar.register}
        </RoundButton>
        <RoundButton bgcolor="secondary" color="primary" noPadding={false}>
          {languages[language].navBar.login}
        </RoundButton>
        <LaguageButton />
      </StyledNavRight>
    </StyledNav>
  )
}

export default Navbar
