import { ReactNode } from 'react'

export type Theme = 'dark' | 'light'
export type ThemeProps = {
  children: ReactNode
}
export type ThemeContextType = {
  theme: 'dark' | 'light'
  changeTheme: () => void
}
export type StyleTheme = {
  colors: {
    primary: string
    secondary: string
    alternative: string
    alternative2: string
    card: string
    divider: string
  }
  fontSizes: {
    small: string
    medium: string
    large: string
    xlarge: string
  }
  fontWeights: {
    light: number
    normal: number
    bold: number
  }
  lineHeights: {
    small: number
    medium: number
    large: number
  }
  space: {
    small: string
    medium: string
    large: string
    xlarge: string
  }
  radii: {
    small: string
    medium: string
    large: string
    xlarge: string
  }
  shadows: {
    small: string
    medium: string
    large: string
  }
  zIndices: {
    header: number
    navbar: number
    sidebar: number
    footer: number
  }
}
export type ColorTheme =
  | 'primary'
  | 'secondary'
  | 'alternative'
  | 'alternative2'
export type RoundButtonTheme = {
  theme?: StyleTheme
  bgcolor: ColorTheme
  color: ColorTheme
  children: ReactNode
}
