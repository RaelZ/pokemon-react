import React from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useTheme from '../../../hooks/useTheme'
import { themes } from '../../../themes'
import languages from '../../../translations'
import LaguageButton from '../../LaguageButton'
import RoundButton from '../../RoundButton'
import { StyledNav, StyledNavLeft, StyledNavRight } from './styled'

const Navbar: React.FC = () => {
  const { theme } = useTheme()
  const { language } = useLanguage()

  return (
    <StyledNav theme={themes[theme]}>
      <StyledNavLeft>{languages[language].navBar.logo}</StyledNavLeft>
      <StyledNavRight>
        <RoundButton bgcolor="alternative" color="primary">
          {languages[language].navBar.register}
        </RoundButton>
        <RoundButton bgcolor="secondary" color="primary">
          {languages[language].navBar.login}
        </RoundButton>
        <LaguageButton />
      </StyledNavRight>
    </StyledNav>
  )
}

export default Navbar
