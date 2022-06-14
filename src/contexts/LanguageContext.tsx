import React, { createContext, FC } from 'react'
import languages from '../translations'
import { Children } from '../types/Children'
import { Language, LanguageContextType } from '../types/Language'

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ptBR',
  changeLanguage: () => {},
  activeLanguage: languages.ptBR,
})

const LanguageProvider: FC<Children> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>('ptBR')
  const activeLanguage = languages[language]

  const changeLanguage = (newLanguage: Language) => setLanguage(newLanguage)

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, activeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
