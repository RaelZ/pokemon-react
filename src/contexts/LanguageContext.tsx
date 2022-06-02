import React, { createContext, FC } from 'react'
import { Language, LanguageContextType, LanguageProps } from '../types/Language'

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ptBR',
  seLanguage: () => {},
})

const LanguageProvider: FC<LanguageProps> = ({ children }) => {
  const [language, seLanguage] = React.useState<Language>('ptBR')

  return (
    <LanguageContext.Provider value={{ language, seLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
