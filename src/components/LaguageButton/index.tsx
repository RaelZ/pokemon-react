import React, { useState } from 'react'
import useLanguage from '../../hooks/useLanguage'
import useTheme from '../../hooks/useTheme'
import { themes } from '../../themes'
import ModalBG from '../ModalBG'
import { dataLanguages } from '../../data/dataButtons'
import {
  SquaredLanguageButton,
  StyledLanguageButton,
  StyledMenu,
} from './styled'
import ReactCountryFlag from 'react-country-flag'

const LaguageButton: React.FC = () => {
  const { theme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const actualLanguage = dataLanguages.find((find) => find.name === language)

  return (
    <>
      <StyledLanguageButton
        onClick={() => setOpen(!open)}
        theme={themes[theme]}
      >
        <ReactCountryFlag countryCode={actualLanguage?.icon || 'BR'} />
      </StyledLanguageButton>
      {open && (
        <>
          <ModalBG onClose={() => setOpen(false)} />
          <StyledMenu theme={themes[theme]}>
            {dataLanguages.map((item) => (
              <SquaredLanguageButton
                onClick={() => changeLanguage(item.name)}
                key={item.id}
                theme={themes[theme]}
              >
                <ReactCountryFlag countryCode={item.icon} />
              </SquaredLanguageButton>
            ))}
          </StyledMenu>
        </>
      )}
    </>
  )
}

export default LaguageButton
