export type Language = 'ptBR' | 'enUS'
export type LanguageContextType = {
  language: 'ptBR' | 'enUS'
  changeLanguage: (theme: 'ptBR' | 'enUS') => void
  activeLanguage: LanguageTheme
}
export type LanguageTheme = {
  sideBar: {
    home: string
    game: string
    settings: string
    theme: string
  }
  navBar: {
    logo: string
    register: string
    login: string
  }
  modal: {
    cancel: string
    confirm: string
    close: string
    login: string
    register: string
    forgotPassword: string
  }
}
export type LanguagesType = {
  id: number
  name: Language
  icon: string
}
