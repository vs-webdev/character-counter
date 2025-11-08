export const getCharacterCount = (text, isExcludeSpaces) => isExcludeSpaces 
  ? text.replace(/\s+/g, "").length 
  : text.length

export const getWordCount = (text) => text.trim()
  .split(/\s+/)
  .filter(Boolean).length

export const getSentenceCount = (text) => text.match(/[^.!?]+[.!?]+/g)?.length || 0

export const getLetterDensity = (text) => {
  const letterCounts = new Map()
  let totalLetters = 0

  // Count all letters
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase()
    const code = char.charCodeAt(0)

    if (code >= 97 && code <= 122) {
      const char = String.fromCharCode(code)
      letterCounts.set(char, (letterCounts.get(char) || 0) + 1)
      totalLetters++
    }
  }

  if (totalLetters === 0) return []

  // Convert to sorted array of objects for easy rendering
  const result = []
  for (const [letter, count] of letterCounts) {
    result.push({
      letter,
      count,
      percent: (count / totalLetters) * 100,
    })
  }

  result.sort((a, b) => b.count - a.count)

  return result
}