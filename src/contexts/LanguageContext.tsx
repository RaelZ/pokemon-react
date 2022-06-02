import React, { createContext, FC } from 'react'
import { Language, LanguageContextType, LanguageProps } from '../types/Language'

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ptBR',
  changeLanguage: () => {},
})

const LanguageProvider: FC<LanguageProps> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>('ptBR')

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
