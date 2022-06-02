import { ReactNode } from 'react'

export type Language = 'ptBR' | 'enUS'
export type LanguageProps = {
  children: ReactNode
}
export type LanguageContextType = {
  language: 'ptBR' | 'enUS'
  seLanguage: (theme: 'ptBR' | 'enUS') => void
}