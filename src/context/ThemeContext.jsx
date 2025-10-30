import { createContext, useCallback, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context){
    throw new Error("useTheme should be used within ThemeProvider");
  }
  return context
}

export const ThemeProvider = ({children}) => {
  const getPreferredTheme = () => 
    localStorage.getItem('theme') ||
    window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'

  const [theme, setTheme] = useState(getPreferredTheme)
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}