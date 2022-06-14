import React from 'react'
import useLanguage from '../../../hooks/useLanguage'
import useSidebar from '../../../hooks/useSidebar'
import useTheme from '../../../hooks/useTheme'
import SquaredButton from '../../SquaredButton'
import { dataButtons, themeButton } from '../../../data/menu'
import { StyledSideBar } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Sidebar: React.FC = () => {
  const { activeTheme, changeTheme, theme } = useTheme()
  const { language } = useLanguage()
  const { menuOpen } = useSidebar()
  const buttons = dataButtons(language)
  const themedButton = themeButton(language, theme)

  return (
    <StyledSideBar open={!menuOpen} theme={activeTheme}>
      <div>
        {buttons.map((button, index) => (
          <SquaredButton open={menuOpen} key={index}>
            <FontAwesomeIcon icon={button.icon as IconProp} />
          </SquaredButton>
        ))}
      </div>
      <SquaredButton open={menuOpen} onClick={() => changeTheme()}>
        <FontAwesomeIcon icon={themedButton.icon as IconProp} />
      </SquaredButton>
    </StyledSideBar>
  )
}

export default Sidebar
