import React, { createContext, FC } from 'react'
import { Children } from '../types/Children'
import { Language, LanguageContextType } from '../types/Language'

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ptBR',
  changeLanguage: () => {},
})

const LanguageProvider: FC<Children> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>('ptBR')

  const changeLanguage = (newLanguage: Language) => setLanguage(newLanguage)

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
