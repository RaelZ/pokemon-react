import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useSidebar from '../../../hooks/useSidebar'
import useTheme from '../../../hooks/useTheme'
import Logo from '../../../icons/Logo'
import languages from '../../../translations'
import LaguageButton from '../../LaguageButton'
import Login from '../../Login'
import RoundButton from '../../RoundButton'
import { StyledNav, StyledNavLeft, StyledNavRight } from './styled'

const Navbar: React.FC = () => {
  const [modalLogin, setModalLogin] = useState(false)

  const { activeTheme } = useTheme()
  const { changeSidebar } = useSidebar()
  const { language } = useLanguage()

  return (
    <>
      <StyledNav theme={activeTheme}>
        <StyledNavLeft>
          <RoundButton
            onClick={changeSidebar}
            bgcolor="primary"
            color="alternative"
            noPadding={true}
          >
            <FontAwesomeIcon icon={faBars} />
          </RoundButton>
          <Logo />
        </StyledNavLeft>
        <StyledNavRight>
          <RoundButton bgcolor="alternative" color="primary">
            {languages[language].navBar.register}
          </RoundButton>
          <RoundButton
            onClick={() => setModalLogin(true)}
            bgcolor="secondary"
            color="primary"
            noPadding={false}
          >
            {languages[language].navBar.login}
          </RoundButton>
          <LaguageButton />
        </StyledNavRight>
      </StyledNav>
      {modalLogin && (
        <Login onClose={() => setModalLogin(false)} />
      )}
    </>
  )
}

export default Navbar
