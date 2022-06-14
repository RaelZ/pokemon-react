import React, { useState } from 'react'
import useLanguage from '../../hooks/useLanguage'
import useTheme from '../../hooks/useTheme'
import ModalBG from '../ModalBG'
import {
  SquaredLanguageButton,
  StyledLanguageButton,
  StyledMenu,
} from './styled'
import ReactCountryFlag from 'react-country-flag'
import { dataLanguages } from '../../data/dataButtons'

const LaguageButton: React.FC = () => {
  const { activeTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const actualLanguage = dataLanguages.find((find) => find.name === language)

  return (
    <>
      <StyledLanguageButton
        onClick={() => setOpen(!open)}
        theme={activeTheme}
      >
        <ReactCountryFlag countryCode={actualLanguage?.icon || 'BR'} />
      </StyledLanguageButton>
      {open && (
        <>
          <ModalBG onClose={() => setOpen(false)} />
          <StyledMenu theme={activeTheme}>
            {dataLanguages.map((item) => (
              <SquaredLanguageButton
                onClick={() => changeLanguage(item.name)}
                key={item.id}
                theme={activeTheme}
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
