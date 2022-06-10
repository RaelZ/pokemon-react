import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { dataButtons, themeButton } from '../../../data/menu'
import useLanguage from '../../../hooks/useLanguage'
import useSidebar from '../../../hooks/useSidebar'
import useTheme from '../../../hooks/useTheme'
import { themes } from '../../../themes'
import SquaredButton from '../../SquaredButton'
import { StyledSideBar } from './styled'

const SidebarOpen: React.FC = () => {
  const { theme, changeTheme } = useTheme()
  const { language } = useLanguage()
  const { menuOpen } = useSidebar()
  const buttons = dataButtons(language)
  const themedButton = themeButton(language, theme)

  return (
    <StyledSideBar open={menuOpen} theme={themes[theme]}>
      <div>
        {buttons.map((button, index) => (
          <SquaredButton open={menuOpen} key={index}>
            <FontAwesomeIcon fontSize={36} icon={button.icon} />
            <p>{button.name}</p>
          </SquaredButton>
        ))}
      </div>
      <SquaredButton open={menuOpen} onClick={() => changeTheme()}>
        <FontAwesomeIcon icon={themedButton.icon} />
        <p>{`${themedButton.name} - ${theme}`}</p>
      </SquaredButton>
    </StyledSideBar>
  )
}

export default SidebarOpen
