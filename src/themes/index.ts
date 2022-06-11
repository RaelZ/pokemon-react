import { darktheme } from './Dark'
import { lighTheme } from './Light'

const sizes = {
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    small: 1.25,
    medium: 1.5,
    large: 2,
  },
  space: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    xlarge: '1.5rem',
  },
  padding: {
    xsmall: '0.25rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1rem',
    xlarge: '1.5rem',
  },
  radio: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    xlarge: '1.5rem',
  },
  shadows: {
    small: '0 0 0.5rem rgba(0, 0, 0, 0.2)',
    medium: '0 0 1rem rgba(0, 0, 0, 0.2)',
    large: '0 0 1.5rem rgba(0, 0, 0, 0.2)',
  },
  zIndices: {
    header: 100,
    navbar: 300,
    sidebar: 200,
    footer: 400,
  },
}
export const themes = {
  light: { ...lighTheme, ...sizes },
  dark: { ...darktheme, ...sizes },
}
