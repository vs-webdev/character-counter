import { createContext, useContext, useState } from "react"

const TextContext = createContext(null)

export const useText = () => {
  const context = useContext(TextContext)
  if (!context) throw new Error("useText must be used within TextProvider")
  return context;
}

export const TextProvider = ({children}) => {
  const [text, setText] = useState("")
  const [exclueSpaces, setExcludeSpaces] = useState(false)
  
  const value = {
    text,
    setText,
    exclueSpaces, 
    setExcludeSpaces,
  }

  return (
    <TextContext.Provider value={value}>
      {children}
    </TextContext.Provider>
  )
}