import { createContext } from 'react'

export const theme = {
  bg: '#ffffff',
  text: '#424749',
  subText: '#6e7679',
  outline: '#f1f1f2',
  shadow: '0 8px 10px 0 rgba(10, 31, 68, 0.1)',
  lightRed: '#f9423a',
  darkRed: '#a23530'
}

export const ThemeContext = createContext(theme);