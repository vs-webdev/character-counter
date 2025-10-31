export const getCharacterCount = (text, isExcludeSpaces) => isExcludeSpaces 
  ? text.replace(/\s+/g, "").length 
  : text.length

export const getWordCount = (text) => text.trim()
  .split(/\s+/)
  .filter(Boolean).length