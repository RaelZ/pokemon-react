import React, { createContext, FC, useState } from 'react'
import { Children } from '../types/Children'
import { Theme, ThemeContextType } from '../types/Theme'

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: Function,
})

const ThemeProvider: FC<Children> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const changeTheme = () => {
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
