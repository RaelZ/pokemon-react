import { ReactNode } from 'react'

export type Language = 'ptBR' | 'enUS'
export type LanguageProps = {
  children: ReactNode
}
export type LanguageContextType = {
  language: 'ptBR' | 'enUS'
  changeLanguage: (theme: 'ptBR' | 'enUS') => void
}
export type LanguagesType = {
  id: number,
  name: Language,
  icon: string
}