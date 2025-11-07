import { createContext, useContext, useMemo, useState } from "react"
import { getCharacterCount, getSentenceCount, getWordCount } from "../utils/textUtils"

const TextContext = createContext(null)

export const TextProvider = ({children}) => {
  const [text, setText] = useState("")
  const [isExcludeSpace, setIsExcludeSpace] = useState(false)
  const characterCount = useMemo(() => getCharacterCount(text, isExcludeSpace), [text, isExcludeSpace])
  const wordCount = useMemo(() => getWordCount(text), [text])
  const sentenceCount = useMemo(() => getSentenceCount(text), [text])
  
  const value = {
    text,
    setText,
    wordCount,
    sentenceCount,
    characterCount,
    isExcludeSpace,
    setIsExcludeSpace,
  }

  return (
    <TextContext.Provider value={value}>
      {children}
    </TextContext.Provider>
  )
}

export const useText = () => {
  const context = useContext(TextContext)
  if (!context) throw new Error("useText must be used within TextProvider")
  return context;
}