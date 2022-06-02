import React, { useRef, useState } from 'react'
import useLanguage from '../../hooks/useLanguage'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import ModalBG from '../ModalBG'
import { dataLanguages } from './dataButtons'
import {
  SquaredLanguageButton,
  StyledLanguageButton,
  StyledMenu,
} from './styled'

const LaguageButton: React.FC = () => {
  const { theme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const currentButton = useRef(null)
  const actualLanguage = dataLanguages.find((find) => find.name === language)

  console.log(currentButton)

  return (
    <>
      <StyledLanguageButton
        onClick={() => setOpen(!open)}
        ref={currentButton.current}
        theme={themes[theme]}
      >
        {actualLanguage?.icon}
      </StyledLanguageButton>
      {open && (
        <>
          <ModalBG onClose={() => setOpen(false)} theme={false} />
          <StyledMenu theme={themes[theme]}>
            {dataLanguages.map((item) => (
              <SquaredLanguageButton
                onClick={() => changeLanguage(item.name)}
                key={item.id}
                theme={themes[theme]}
              >
                {item.icon}
              </SquaredLanguageButton>
            ))}
          </StyledMenu>
        </>
      )}
    </>
  )
}

export default LaguageButton
