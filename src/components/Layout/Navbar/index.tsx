import React from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useTheme from '../../../hooks/useTheme'
import { themes } from '../../../themes'
import languages from '../../../translations'
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
          Register
        </RoundButton>
        <RoundButton bgcolor="secondary" color="primary">
          Login
        </RoundButton>
      </StyledNavRight>
    </StyledNav>
  )
}

export default Navbar
