import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, lightColors } from '@pancakeswap/uikit'
// import { Colors } from '@pancakeswap/uikit'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null, colors: lightColors })

const ThemeContextProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  const colors = lightColors
  colors.primary = 'rgb(18, 99, 241)'
  colors.overlay = 'rgb(38, 88, 163)'
  colors.text = 'rgb(7, 22, 45)'
  colors.textSubtle = 'rgb(96, 151, 247)'
  colors.secondary = 'rgb(6, 54, 128)'

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      <SCThemeProvider theme={light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
