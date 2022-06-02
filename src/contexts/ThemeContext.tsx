import React, { createContext, FC, useState } from 'react'
import { Theme, ThemeContextType, ThemeProps } from '../types/Theme'

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: () => {},
})

const ThemeProvider: FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [kill, setKill] = useState<boolean>(false)

  const changeTheme = () => {
    setKill(!kill)
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')
  }
  React.useEffect(() => {
    console.log(kill)
  }, [kill])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
