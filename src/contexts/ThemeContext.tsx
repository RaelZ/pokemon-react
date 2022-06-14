import React, { createContext, FC, useState } from 'react'
import { themes } from '../themes'
import { Children } from '../types/Children'
import { Theme, ThemeContextType } from '../types/Theme'

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: Function,
  activeTheme: themes.dark,
})

const ThemeProvider: FC<Children> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const activeTheme = themes[theme]

  const changeTheme = () => {
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, activeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
