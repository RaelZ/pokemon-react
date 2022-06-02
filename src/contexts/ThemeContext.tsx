import React, { createContext, FC, useState } from 'react'
import { Theme, ThemeContextType, ThemeProps } from '../types/Theme'

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: Function,
})

const ThemeProvider: FC<ThemeProps> = ({ children }) => {
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
